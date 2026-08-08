"use client";
import React from "react";
import { WavyBackground } from "./WavyBackground.tsx";
export interface HeroProps {
  image: string;
  subtitleLine1: string;
  subtitleLine2: string;
}
export function Hero2(props: HeroProps) {


  return (
    <WavyBackground className="max-w-4xl mx-auto">
      <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center my-10 mx-7 md:mx-auto">
        {
          props.image && (
            <img src={props.image} className="min-h-[15vh]" alt="socodia logo" />
          )
        }      </div>
      <p className="sm:mx-1 text-2xl dark:text-gray-300 text-muted mb-6 self-center text-center text-slate-700 align-middle w-[280px] xl:w-[350px]">
        <span className="block">{props.subtitleLine1}</span>
        <span className="block">{props.subtitleLine2}</span>
      </p>
    </WavyBackground>
  );
}
