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
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-10">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
            Our 12-Month Impact Vision
          </h2>

          {/* Flex Container */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {impactItems.map((item, index) => (
              <div 
                key={index}
                className="border border-[#F47B20] p-5 flex flex-col gap-5 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33%-1.5rem)]"
              >
                {/* Number */}
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFC396] leading-none">
                  {item.number}
                </p>

                {/* Title */}
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#F47B20] leading-tight">
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
