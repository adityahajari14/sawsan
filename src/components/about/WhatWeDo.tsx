import React from 'react';

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Header */}
          <div className="flex flex-col gap-8 md:gap-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              What We Do
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-4xl">
              We bring healthcare directly to women— one booth, one volunteer, one doctor at a time.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {/* Card 1 */}
            <div className="h-64 md:h-72 rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm md:text-base">Card 1</p>
            </div>
            
            {/* Card 2 */}
            <div className="h-64 md:h-72 rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm md:text-base">Card 2</p>
            </div>
            
            {/* Card 3 */}
            <div className="h-64 md:h-72 rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm md:text-base">Card 3</p>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-5xl">
            The result is a calm, respectful environment where women can speak freely, ask questions, and receive real medical guidance without judgment.
          </p>
        </div>
      </div>
    </section>
  );
}

