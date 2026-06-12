"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={props.className}>
      <motion.div
        animate={shouldReduceMotion ? undefined : { translateY: "-50%" }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: props.duration || 10,
                repeat: Infinity,
                ease: "linear" as const,
                repeatType: "loop" as const,
              }
        }
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-[#6A00FF]/20 bg-[#1A0033]/60 shadow-lg shadow-[#6A00FF]/10 max-w-xs w-full"
                key={i}
              >
                <div className="text-white/80 text-sm leading-relaxed">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6A00FF] to-[#D600FF] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight text-white/60 text-sm">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
