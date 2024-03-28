"use client";
import React from "react";
import { WavyBackground } from "./WavyBackground.tsx";
export interface HeroProps {
  image: string;
  subtitle:string; 
}
export function Hero2(props: HeroProps) {
  return (
    <WavyBackground className="max-w-4xl mx-auto" backgroundFill="#ffffff">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center">
      {
          props.image && (
            <img src={props.image} className="mb-4 h-[calc(0.2*100vw)]" />
          )
        }      </p>
      <p className="text-xl text-muted mb-6 mx-auto dark:text-slate-300 text-slate-700 align-middle flex justify-center">
        {props.subtitle}
      </p>
    </WavyBackground>
  );
}
