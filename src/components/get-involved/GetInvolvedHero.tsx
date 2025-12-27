"use client";

import { motion } from "framer-motion";

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEasing
    }
  }
};

export default function GetInvolvedHero() {
  return (
    <section className="bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 md:gap-10"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="block text-black">Stand With Women.</span>
            <span className="block text-black">Restore Care With Dignity.</span>
          </motion.h1>

          {/* Description */}
          <motion.div 
            className="text-base md:text-lg lg:text-xl leading-relaxed text-black max-w-4xl"
            variants={itemVariants}
          >
            <p className="mb-4">
              There are many ways to be part of this work. Each one matters.
            </p>
            <p>
              Whether you offer time, expertise, resources, or partnership—your
              involvement helps ensure women are never alone with their health.
            </p>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-[#F47B20] font-medium text-lg md:text-xl cursor-pointer group relative overflow-hidden h-[32px]"
          >
            <div className="flex items-center gap-4 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
              <span>Join the Movement</span>
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
            <div className="absolute inset-0 flex items-center gap-4 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <span>Join the Movement</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transform rotate-45"
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