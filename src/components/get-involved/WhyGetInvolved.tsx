"use client";

import { motion } from "framer-motion";

export default function WhyGetInvolved() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F47B20] rounded-[50px] p-8 md:p-12 lg:p-16 flex flex-col gap-8 md:gap-12"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Why Get Involved
          </h2>

          {/* Description */}
          <div className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
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
          </div>

          {/* CTA Link */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 text-white font-medium text-lg md:text-xl cursor-pointer"
          >
            <span>Learn How Our Model Works</span>
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
