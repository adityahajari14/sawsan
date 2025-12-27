import React from 'react';
import Link from 'next/link';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-45deg] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function OurVision() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 md:gap-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F47B20]">
            Our Vision
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-4xl">
            We are building something women can rely on. A foundation they recognize and return to. Care that grows with integrity, without losing its human center.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group"
          >
            <span className="text-base md:text-lg font-medium">
              See Our Model
            </span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

