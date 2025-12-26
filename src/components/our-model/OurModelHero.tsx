import React from 'react';

export default function OurModelHero() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 md:space-y-12 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-black">Quiet </span>
            <span className="text-[#F47B20]">care.</span>
            <span className="text-black"> Real </span>
            <span className="text-[#F47B20]">change.</span>
          </h1>

          {/* Description */}
          <div className="mx-auto space-y-1 text-lg md:text-xl lg:text-2xl text-black leading-relaxed text-left">
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
