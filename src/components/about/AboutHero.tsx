'use client';

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
    y: 40 
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

export default function AboutHero() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black max-w-2xl"
            variants={itemVariants}
          >
            A Foundation Built on Dignity
          </motion.h1>
          <motion.div 
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl"
            variants={itemVariants}
          >
            <p className="mb-4">The Sawsan Alakhras Foundation exists to make one thing possible:<br /> <span className="text-[#F47B20] font-bold">safe, dignified healthcare for women who are too often unheard.</span></p>
            <p className="mb-4">We work inside underserved Syrian communities, where accessing basic medical care can mean long travel, high cost, exposure, or silence. In these places, women are frequently forced to delay care—or go without it entirely.</p>
            <p className="mb-4">We believe dignity should never be a luxury.</p>
            <p>And care should never come with fear.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
