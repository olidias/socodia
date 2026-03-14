# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files first for layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files
COPY . .

# Build the Astro site
# No secrets needed at build time — SMTP vars are injected at runtime
RUN npm run build

# Stage 2: Runtime
FROM node:18-alpine AS runtime
WORKDIR /app

# Copy build output and dependencies from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Bind to all interfaces so Traefik/Coolify can reach the container
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", "./dist/server/entry.mjs"]
