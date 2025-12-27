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
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 md:gap-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black max-w-4xl">
              How We Work
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-4xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="bg-white border border-[#F47B20] rounded-[25px] p-6 flex flex-col justify-between min-h-[420px]"
              >
                <div className="flex flex-col gap-6">
                  <p className="text-[42px] font-bold text-black leading-none">
                    {card.number}
                  </p>
                  <div>
                    <p className="text-[17px] font-bold text-[#F47B20] mb-1">{card.title}</p>
                    <p className="text-[17px] text-black">{card.subtitle}</p>
                  </div>
                  <p className="text-[17px] text-black leading-normal">
                    {card.description}
                  </p>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-2.5 text-[#F47B20] hover:text-[#E85A28] transition-colors group mt-6"
                >
                  <span className="text-[17px] font-medium leading-[24px] tracking-[-0.7px]">
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

