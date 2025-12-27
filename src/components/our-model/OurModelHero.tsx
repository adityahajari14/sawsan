'use client';

import React from 'react';
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

export default function OurModelHero() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="space-y-6 md:space-y-10 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="text-black">Quiet </span>
            <span className="text-[#F47B20]">care.</span>
            <span className="text-black"> Real </span>
            <span className="text-[#F47B20]">change.</span>
          </motion.h1>

          {/* Description */}
          <motion.div 
            className="mx-auto space-y-1 text-base md:text-lg lg:text-xl text-black leading-relaxed text-left"
            variants={itemVariants}
          >
            <p>
              We exist to make healthcare feel safe, respectful, and accessible for women who are too often unheard.
            </p>
            <p className="mb-0">
              Our impact isn&apos;t measured by noise but by presence, trust, and continuity of care.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}