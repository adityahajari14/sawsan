import React from 'react';

export default function AboutHero() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black max-w-2xl">
            A Foundation Built on Dignity
          </h1>
          <div className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl">
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

