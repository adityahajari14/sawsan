import React from 'react';
import Link from 'next/link';

export default function BePartOfChange() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-[865px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 blur-[1px] mb-8 md:mb-12">
              Be Part of the Change
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-[623px]">
              Whether you give your time, resources, or reach, you help bring safe, dignified healthcare to women who need it most.
            </p>
          </div>

          {/* Right Column - CTA Links */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:min-w-[257px]">
            <Link
              href="#"
              className="text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group inline-block"
            >
              <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
                Volunteer as a Doctor
              </span>
            </Link>
            
            <Link
              href="#"
              className="text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group inline-block"
            >
              <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
                Donate Now
              </span>
            </Link>
            
            <Link
              href="#"
              className="text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group inline-block"
            >
              <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
                Partner With Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
