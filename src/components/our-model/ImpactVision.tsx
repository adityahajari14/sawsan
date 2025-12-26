import React from 'react';

const impactItems = [
  {
    number: '01',
    title: '5 fully functioning health booths'
  },
  {
    number: '02',
    title: '5,000+ women supported'
  },
  {
    number: '03',
    title: '20–30 volunteer doctors'
  },
  {
    number: '04',
    title: 'Cross-border partnerships'
  },
  {
    number: '05',
    title: 'Clear, measurable outcomes'
  }
];

export default function ImpactVision() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Our 12-Month Impact Vision
          </h2>

          {/* Flex Container */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {impactItems.map((item, index) => (
              <div 
                key={index}
                className="border border-[#F47B20] p-6 flex flex-col gap-6 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-2rem)]"
              >
                {/* Number */}
                <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFC396] leading-none">
                  {item.number}
                </p>

                {/* Title */}
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#F47B20] leading-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
