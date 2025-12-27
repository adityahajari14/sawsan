import React from 'react';

export default function OurModelHero() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 md:space-y-10 text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-black">Quiet </span>
            <span className="text-[#F47B20]">care.</span>
            <span className="text-black"> Real </span>
            <span className="text-[#F47B20]">change.</span>
          </h1>

          {/* Description */}
          <div className="mx-auto space-y-1 text-base md:text-lg lg:text-xl text-black leading-relaxed text-left">
            <p>
              We exist to make healthcare feel safe, respectful, and accessible for women who are too often unheard.
            </p>
            <p className="mb-0">
              Our impact isn&apos;t measured by noise but by presence, trust, and continuity of care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
