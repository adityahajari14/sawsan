"use client";

import { motion } from "framer-motion";

export default function GetInvolvedHero() {
  return (
    <section className="bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:gap-10"
        >
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="block text-black">Stand With Women.</span>
            <span className="block text-black">Restore Care With Dignity.</span>
          </h1>

          {/* Description */}
          <div className="text-base md:text-lg lg:text-xl leading-relaxed text-black max-w-4xl">
            <p className="mb-4">
              There are many ways to be part of this work. Each one matters.
            </p>
            <p>
              Whether you offer time, expertise, resources, or partnership—your
              involvement helps ensure women are never alone with their health.
            </p>
          </div>

          {/* CTA Link */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 text-[#F47B20] font-medium text-lg md:text-xl cursor-pointer"
          >
            <span>Join the Movement</span>
            <div className="-rotate-45">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
