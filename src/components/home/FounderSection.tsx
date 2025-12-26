import React from 'react';
import Link from 'next/link';

export default function FounderSection() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title - Blurred effect */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 blur-[1px]">
            From the Founder
          </h3>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-12">
          {/* Foundation Named Section */}
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900">
              The foundation is named in memory of
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F47B20]">
              Sawsan Mohammad Nizar Alakhras.
            </h2>
          </div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto relative px-4 md:px-8 py-8 md:py-12">
            {/* Opening Quote */}
            <div className="absolute -left-2 md:-left-4 top-0 text-[80px] md:text-[120px] lg:text-[130px] leading-none text-gray-400 font-serif">
              &ldquo;
            </div>

            {/* Main Quote Text */}
            <div className="relative z-10 space-y-6 md:space-y-8">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-relaxed text-gray-600 font-light">
                This foundation was created in memory of my mother, Sawsan. A woman who believed that dignity is not optional, especially in care. She taught me that listening is an act of respect, and compassion is something you do, not just feel. This work carries her name to honor those values and to hold us accountable to them every day.
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-relaxed text-gray-600 font-light">
                My hope is simple: that this foundation becomes a quiet, reliable place where women feel safe, heard, and supported when they need it most.
              </p>
            </div>

            {/* Closing Quote */}
            <div className="absolute -right-2 md:-right-4 bottom-0 text-[80px] md:text-[120px] lg:text-[130px] leading-none text-gray-400 font-serif">
              &rdquo;
            </div>
          </div>

          {/* Attribution */}
          <div className="text-right max-w-5xl mx-auto">
            <p className="text-base md:text-lg text-gray-900 italic">— Nisreen</p>
          </div>

          {/* Read Full Note Link */}
          <div className="max-w-5xl mx-auto">
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group"
            >
              <span className="text-base md:text-lg font-medium border-b border-[#F47B20] group-hover:border-[#E85A28]">
                Read full note
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
