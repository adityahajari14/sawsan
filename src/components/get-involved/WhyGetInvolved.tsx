"use client";

import { motion } from "framer-motion";

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];
const gentleEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.96,
    y: 30
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: gentleEasing,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing
    }
  }
};

export default function WhyGetInvolved() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-[#F47B20] rounded-[50px] p-6 md:p-10 lg:p-12 flex flex-col gap-6 md:gap-10"
        >
          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            Why Get Involved
          </motion.h2>

          {/* Description */}
          <motion.div 
            className="text-base md:text-lg lg:text-xl text-white leading-relaxed"
            variants={itemVariants}
          >
            <p className="mb-4">
              <span>In many parts of Syria, accessing healthcare is not routine. </span>
              <span className="font-bold">It's a risk.</span>
            </p>
            <p className="mb-4">
              <span>
                Women face long travel, overcrowded clinics, limited privacy and
                difficult choices between health and household survival. Our work
                exists to reduce that burden{" "}
              </span>
              <span className="font-bold">
                carefully, ethically and sustainably.
              </span>
            </p>
            <p>
              Getting involved means helping build a system that protects dignity
              while delivering real medical care.
            </p>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-white font-medium text-lg md:text-xl cursor-pointer group relative overflow-hidden h-[32px]"
          >
            <div className="flex items-center gap-4 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
              <span>Learn How Our Model Works</span>
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
              <span>Learn How Our Model Works</span>
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
