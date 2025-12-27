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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEasing
    }
  }
};

export default function DonationHero() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-30 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto text-center space-y-6 md:space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F47B20] leading-tight"
        >
          Your Support Creates Safe Access
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl font-normal text-black max-w-3xl mx-auto"
        >
          Every contribution helps restore dignity, privacy and care.
        </motion.p>
      </motion.div>
    </section>
  );
}

