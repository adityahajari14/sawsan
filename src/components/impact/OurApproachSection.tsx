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
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEasing
    }
  }
};

export default function OurApproachSection() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
        >
          <span className="text-[#F47B20]">Our Approach</span>
          <span className="text-black"> to Impact</span>
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-normal mb-6 md:mb-8 text-black"
        >
          Starting <span className="font-bold text-[#F47B20]">Small</span>. Building <span className="font-bold text-[#F47B20]">Trust</span>. Scaling <span className="font-bold text-[#F47B20]">Responsibly</span>.
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-6xl"
        >
          The Sawsan Alakhras Foundation is in its early stage.
          <br />
          Rather than rushing scale, we are focused on creating a model that works ethically, medically, and culturally.
        </motion.p>
      </motion.div>
    </section>
  );
}

