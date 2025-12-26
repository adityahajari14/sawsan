import React from 'react';

export default function OurModel() {
  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20]">
              Our Model
            </h2>
            <p className="text-lg md:text-xl text-[#F47B20] leading-relaxed max-w-xl">
              Every person deserves respect in every interaction. Care is only credible when humanity comes first.
            </p>
          </div>

          {/* Right Column - Service Cards */}
          <div className="space-y-3 max-w-xl lg:ml-auto">
            {/* Card 1 - The Booth */}
            <div className="bg-[#F47B20] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-[#E85A28] transition-colors">
              <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                The Booth — A Safe Space
              </h3>
              <div className="w-7 h-7 rounded-full bg-white flex-shrink-0" />
            </div>

            {/* Card 2 - The Volunteer */}
            <div className="bg-[#8B6F47] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-[#7A5F3D] transition-colors">
              <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                The Volunteer — The Human Connection
              </h3>
              <div className="w-7 h-7 rounded-full bg-white flex-shrink-0" />
            </div>

            {/* Card 3 - The Doctors */}
            <div className="bg-[#F47B20] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-[#E85A28] transition-colors">
              <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                The Doctors — Expertise Without Borders
              </h3>
              <div className="w-7 h-7 rounded-full bg-white flex-shrink-0" />
            </div>

            {/* Card 4 - The Digital Layer (Expanded) */}
            <div className="border-2 border-gray-300 rounded-xl px-5 py-4 bg-white">
              <div className="flex items-start justify-between mb-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 max-w-md">
                  The Digital Layer — Simple by Design
                </h3>
                <div className="w-7 h-7 rounded-full bg-[#F47B20] flex-shrink-0 mt-1" />
              </div>
              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  A lightweight system to schedule visits, record notes, issue prescriptions, and track follow-ups.
                </p>
                <button className="w-7 h-7 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 transition-colors group">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:stroke-white stroke-gray-900 transition-colors"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
