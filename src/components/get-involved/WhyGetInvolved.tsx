"use client";

import { motion } from "framer-motion";

export default function WhyGetInvolved() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F47B20] rounded-[50px] p-6 md:p-10 lg:p-12 flex flex-col gap-6 md:gap-10"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why Get Involved
          </h2>

          {/* Description */}
          <div className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
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
