import React from 'react';
import Link from 'next/link';

export default function GetInTouch() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Intro Section */}
            <div className="mb-10 md:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20] mb-5">
                Get in touch
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed">
                Your voice matters. Contact us to learn more or get involved.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 md:space-y-10">
              {/* Email */}
              <div>
                <p className="text-sm md:text-base text-gray-600 mb-4">Get in touch</p>
                <Link
                  href="mailto:contact@sawsanalakhrasfoundation.org"
                  className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group text-lg md:text-xl"
                >
                  <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
                    contact@sawsanalakhrasfoundation.org
                  </span>
                  <svg
                    width="20"
                    height="20"
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

              {/* Phone */}
              <div>
                <p className="text-sm md:text-base text-gray-600 mb-4">Phone</p>
                <p className="text-lg md:text-xl font-semibold text-gray-900">
                  +00 000 00 00
                </p>
              </div>

              {/* Address */}
              <div>
                <p className="text-sm md:text-base text-gray-600 mb-4">Address</p>
                <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
                  The Sawsan Alakhras Foundation
                  <br />
                  12 Peace Lane, Unit 04
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Social Links */}
          <div className="lg:pl-6 h-full flex self-end">
            <div className="space-y-5 md:space-y-6 h-full flex flex-col">
              <Link
                href="#"
                className="flex items-center justify-between gap-4 text-gray-900 hover:text-[#F47B20] transition-colors group"
              >
                <span className="text-lg md:text-xl font-semibold">Twitter</span>
                <svg
                  width="16"
                  height="16"
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

              <Link
                href="#"
                className="flex items-center justify-between gap-4 text-gray-900 hover:text-[#F47B20] transition-colors group"
              >
                <span className="text-lg md:text-xl font-semibold">Facebook</span>
                <svg
                  width="16"
                  height="16"
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

              <Link
                href="#"
                className="flex items-center justify-between gap-4 text-gray-900 hover:text-[#F47B20] transition-colors group"
              >
                <span className="text-lg md:text-xl font-semibold">Instagram</span>
                <svg
                  width="16"
                  height="16"
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
      </div>
    </section>
  );
}
