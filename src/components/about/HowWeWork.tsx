import React from 'react';

export default function HowWeWork() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Header */}
          <div className="flex flex-col gap-8 md:gap-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              How We Work
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-4xl">
              We combine safe physical spaces, trained volunteers, licensed doctors, and simple technology to deliver dignified, ethical care where it's needed most.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {/* Card 1 */}
            <div className="h-96 md:h-[28rem] rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm md:text-base">Card 1</p>
            </div>
            
            {/* Card 2 */}
            <div className="h-96 md:h-[28rem] rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm md:text-base">Card 2</p>
            </div>
            
            {/* Card 3 */}
            <div className="h-96 md:h-[28rem] rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm md:text-base">Card 3</p>
            </div>
            
            {/* Card 4 */}
            <div className="h-96 md:h-[28rem] rounded-2xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm md:text-base">Card 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

