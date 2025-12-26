import React from 'react';
import Link from 'next/link';

const CheckIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_353_2396)">
      <path 
        d="M1.28613 21.9863L8.30613 31.012C8.54301 31.3198 8.84653 31.5699 9.19391 31.7436C9.54129 31.9173 9.9235 32.0101 10.3118 32.0149C10.6939 32.0193 11.0722 31.9385 11.4192 31.7784C11.7661 31.6183 12.073 31.3828 12.3176 31.0892L34.7147 3.98633" 
        stroke="#F47B20" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_353_2396">
        <rect width="36" height="36" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const values = [
  { text: "Dignity first", rest: " in every interaction" },
  { text: "Listening matters", rest: " care begins by being heard" },
  { text: "Human before system", rest: " trust before efficiency" },
  { text: "Responsible growth", rest: " expand only when quality can be protected" }
];

export default function CareGroundedInValues() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col gap-8 md:gap-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Care, Grounded in <span className="text-[#F47B20]">Values</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
                Everything we do is rooted in respect for the people we serve. These principles guide our care, our presence with patients, and our growth ensuring compassion, trust, and responsibility in every decision.
              </p>
            </div>
          </div>

          {/* Right Column - Values List */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col gap-6 md:gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon />
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                    <span className="font-bold text-[#F47B20]">{value.text}</span>
                    <span className="text-black">{value.rest}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

