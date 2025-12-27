'use client';

import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEasing
    }
  }
};

export default function ImpactHero() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-36 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8"
        >
          <span className="text-[#F47B20]">Impact</span>, Measured in Dignity
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-black max-w-4xl mx-auto"
        >
          What change looks like when women are finally heard.
        </motion.p>
      </motion.div>
    </section>
  );
}

