import type { APIRoute } from "astro";
import { SMTPClient } from "emailjs";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const firstName = data.get("firstName");
  const lastName = data.get("lastName");
  const email = data.get("email");
  const mobile = data.get("mobile");
  const subject = data.get("subject");
  const message = data.get("message");

  if (!firstName || !lastName || !email || !mobile || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  const client = createMailClient();
  console.log(client);
  console.log(process.env.SMTP_TOKEN);
  console.log(process.env.SMTP_HOST);
  console.log(process.env.SMTP_USER);
  await client.sendAsync(
    {
      text: `Subject: ${subject}\n\nContact Data: \nName: ${firstName} ${lastName}\nMobile: ${mobile}\nE-Mail: ${email}\n\n${message}`,
      from: 'Contact form socodia.com Website <info@socodia.com>',
      to: 'info@socodia.com',
      subject: `New Contact Request from ${firstName} ${lastName}`
    });
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );

}



function createMailClient() {
  return new SMTPClient({
    user: process.env.SMTP_USER,
    password: process.env.SMTP_TOKEN,
    host: process.env.SMTP_HOST,
    port: 587,
    tls: true,
  })
}
