import React from 'react';
import Link from 'next/link';

export default function OurVision() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-4xl">
            We are building something women can rely on. A foundation they recognize and return to. Care that grows with integrity, without losing its human center.
          </p>
          <Link
            href="/our-model"
            className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group"
          >
            <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
              See Our Model
            </span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6.66667C0 6.41413 0.105345 6.17193 0.292861 5.99335C0.480376 5.81478 0.734701 5.71446 0.999888 5.71446H12.5846L8.29107 1.62758C8.10332 1.44878 7.99784 1.20627 7.99784 0.953412C7.99784 0.700552 8.10332 0.458048 8.29107 0.279248C8.47883 0.100449 8.73347 0 8.99899 0C9.26452 0 9.51916 0.100449 9.70691 0.279248L15.7062 5.9925C15.7994 6.08096 15.8732 6.18603 15.9236 6.30172C15.9741 6.4174 16 6.54142 16 6.66667C16 6.79192 15.9741 6.91593 15.9236 7.03162C15.8732 7.1473 15.7994 7.25238 15.7062 7.34083L9.70691 13.0541C9.51916 13.2329 9.26452 13.3333 8.99899 13.3333C8.73347 13.3333 8.47883 13.2329 8.29107 13.0541C8.10332 12.8753 7.99784 12.6328 7.99784 12.3799C7.99784 12.1271 8.10332 11.8846 8.29107 11.7058L12.5846 7.61888H0.999888C0.734701 7.61888 0.480376 7.51856 0.292861 7.33998C0.105345 7.16141 0 6.91921 0 6.66667Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

