"use client";

import { motion } from "framer-motion";

export default function GetInvolvedHero() {
  return (
    <section className="bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-black">Stand With Women.</span>
            <span className="block text-black">Restore Care With Dignity.</span>
          </h1>

          {/* Description */}
          <div className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black max-w-4xl">
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
