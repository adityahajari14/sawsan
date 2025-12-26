import React from 'react';

const stats = [
  {
    number: '6M+',
    description: 'Women and girls in need of basic health services'
  },
  {
    number: '50%+',
    description: 'Healthcare facilities damaged or non-functional'
  },
  {
    number: '0',
    description: (
      <>
        <span className="font-bold">Privacy</span>
        <span className="font-medium"> in overcrowded clinics</span>
      </>
    )
  },
  {
    number: '1',
    description: (
      <>
        <span className="font-bold">missed visit</span>
        <span className="font-normal"> can become a preventable emergency</span>
      </>
    )
  }
];

export default function WhyThisMattersSection() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16">
          {/* Left Column - Stats */}
          <div className="space-y-6">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F47B20]">
                Why This Matters
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4 ">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="border border-[#F47B20] p-4 md:p-4 lg:p-6 rounded-sm"
                >
                  <div className="mb-1">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#F47B20] leading-tight">
                      {stat.number}
                    </p>
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl text-black leading-relaxed">
                    {typeof stat.description === 'string' ? (
                      <p className="font-medium">{stat.description}</p>
                    ) : (
                      <p>{stat.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex items-start lg:items-start pt-20">
            <div className="sticky top-24">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F47B20] leading-tight">
                These numbers reflect daily barriers women face while seeking basic medical care.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
