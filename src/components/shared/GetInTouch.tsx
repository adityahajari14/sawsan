'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

const socialVariants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: (custom: number) => ({ 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: smoothEasing
    }
  })
};

export default function GetInTouch() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Intro Section */}
            <motion.div className="mb-10 md:mb-12" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20] mb-5">
                Get in touch
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed">
                Your voice matters. Contact us to learn more or get involved.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-8 md:space-y-10">
              {/* Email */}
              <motion.div variants={itemVariants}>
                <p className="text-sm md:text-base text-gray-600 mb-4">Get in touch</p>
                <Link
                  href="mailto:contact@sawsanalakhrasfoundation.org"
                  className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group text-lg md:text-xl relative overflow-hidden h-[32px]"
                >
                  <div className="flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                    <span>contact@sawsanalakhrasfoundation.org</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <span>contact@sawsanalakhrasfoundation.org</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-45"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <p className="text-sm md:text-base text-gray-600 mb-4">Phone</p>
                <p className="text-lg md:text-xl font-semibold text-gray-900">
                  +00 000 00 00
                </p>
              </motion.div>

              {/* Address */}
              <motion.div variants={itemVariants}>
                <p className="text-sm md:text-base text-gray-600 mb-4">Address</p>
                <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
                  The Sawsan Alakhras Foundation
                  <br />
                  12 Peace Lane, Unit 04
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Social Links */}
          <motion.div 
            className="lg:pl-6 h-full flex self-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="space-y-5 md:space-y-6 h-full flex flex-col">
              <motion.div variants={socialVariants} custom={0}>
                <Link
                  href="#"
                  className="flex items-center justify-between gap-4 text-gray-900 hover:text-[#F47B20] transition-colors group relative overflow-hidden h-[32px]"
                >
                  <div className="flex items-center justify-between gap-4 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                    <span className="text-lg md:text-xl font-semibold">Twitter</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between gap-4 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-lg md:text-xl font-semibold">Twitter</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-45"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={socialVariants} custom={1}>
                <Link
                  href="#"
                  className="flex items-center justify-between gap-4 text-gray-900 hover:text-[#F47B20] transition-colors group relative overflow-hidden h-[32px]"
                >
                  <div className="flex items-center justify-between gap-4 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                    <span className="text-lg md:text-xl font-semibold">Facebook</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between gap-4 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-lg md:text-xl font-semibold">Facebook</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-45"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={socialVariants} custom={2}>
                <Link
                  href="#"
                  className="flex items-center justify-between gap-4 text-gray-900 hover:text-[#F47B20] transition-colors group relative overflow-hidden h-[32px]"
                >
                  <div className="flex items-center justify-between gap-4 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                    <span className="text-lg md:text-xl font-semibold">Instagram</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between gap-4 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-lg md:text-xl font-semibold">Instagram</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-45"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
