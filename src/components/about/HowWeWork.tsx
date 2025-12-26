import React from 'react';
import Link from 'next/link';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-45deg] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cards = [
  {
    number: "01",
    title: "The Booth",
    subtitle: "A Safe Space:",
    description: "A discreet, welcoming micro-clinic designed to protect dignity and privacy.",
    link: "See the Care Space"
  },
  {
    number: "02",
    title: "The Volunteer",
    subtitle: "The Human Connection:",
    description: "Trained Syrian medical and nursing students provide care, clarity, and compassionate support throughout each visit.",
    link: "Meet Our Volunteers"
  },
  {
    number: "03",
    title: "The Doctors",
    subtitle: "Expertise Without Borders:",
    description: "Licensed Saudi physicians deliver remote clinical guidance and referrals with the highest ethical standards.",
    link: "Learn About Our Doctors"
  },
  {
    number: "04",
    title: "The Digital Layer",
    subtitle: "Simple by Design:",
    description: "A streamlined digital system enables scheduling, records, prescriptions, and follow-ups in low-resource settings.",
    link: "How the System Works"
  }
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Header */}
          <div className="flex flex-col gap-8 md:gap-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black max-w-4xl">
              How We Work
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-4xl">
              <span>We combine </span>
              <span className="font-bold text-[#F47B20]">safe physical spaces</span>
              <span>, </span>
              <span className="font-bold text-[#F47B20]">trained volunteers</span>
              <span>, </span>
              <span className="font-bold text-[#F47B20]">licensed doctors</span>
              <span>, and simple technology to deliver dignified, ethical care where it's needed most.</span>
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="bg-white border border-[#F47B20] rounded-[25px] p-8 flex flex-col justify-between min-h-[471px]"
              >
                <div className="flex flex-col gap-8">
                  <p className="text-[51px] font-bold text-black leading-none">
                    {card.number}
                  </p>
                  <div>
                    <p className="text-[20px] font-bold text-[#F47B20] mb-1">{card.title}</p>
                    <p className="text-[20px] text-black">{card.subtitle}</p>
                  </div>
                  <p className="text-[20px] text-black leading-normal">
                    {card.description}
                  </p>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group mt-8"
                >
                  <span className="text-[20px] font-medium leading-[26px] tracking-[-0.8px]">
                    {card.link}
                  </span>
                  <div className="flex-shrink-0">
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

