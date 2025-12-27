'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-45deg] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export default function OurVision() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col items-center gap-6 md:gap-10 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F47B20]"
            variants={itemVariants}
          >
            Our Vision
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-4xl"
            variants={itemVariants}
          >
            We are building something women can rely on. A foundation they recognize and return to. Care that grows with integrity, without losing its human center.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group relative overflow-hidden h-[32px]"
            >
              <div className="flex items-center gap-3 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                <span className="text-base md:text-lg font-medium">
                  See Our Model
                </span>
                <ArrowIcon />
              </div>
              
              <div className="absolute inset-0 flex items-center gap-3 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-base md:text-lg font-medium">
                  See Our Model
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}