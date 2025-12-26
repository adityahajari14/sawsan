import React from 'react';

export default function AboutHero() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black max-w-2xl">
            A Foundation Built on Dignity
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl">
            <p className="mb-4">The Sawsan Alakhras Foundation exists to make one thing possible:<br /> <span className="text-[#F47B20] font-bold">safe, dignified healthcare for women who are too often unheard.</span></p>
            <p className="mb-4">We work inside underserved Syrian communities, where accessing basic medical care can mean long travel, high cost, exposure, or silence. In these places, women are frequently forced to delay care—or go without it entirely.</p>
            <p className="mb-4">We believe dignity should never be a luxury.</p>
            <p>And care should never come with fear.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

