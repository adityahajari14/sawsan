'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEasing
    }
  }
};

const impacts = [
  {
    image: "/impact-img1.webp",
    text: "speaking openly without fear"
  },
  {
    image: "/impact-img2.webp",
    text: "being examined in private"
  },
  {
    image: "/impact-img3.webp",
    text: "being guided by a doctor she trusts"
  },
  {
    image: "/impact-img4.webp",
    text: "understanding her next steps"
  },
  {
    image: "/impact-img5.webp",
    text: "not feeling alone"
  }
];

export default function WhatImpactLooksLike() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
          >
            <span className="text-black">What Impact </span>
            <span className="text-[#F47B20]">Looks Like on the Ground</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-black mb-10 md:mb-12"
          >
            Beyond Numbers
          </motion.p>
        </div>

        {/* Content */}
        <div className="space-y-10 md:space-y-12">
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-black text-center"
          >
            For a woman, impact can mean:
          </motion.p>

          {/* First Row - 3 items */}
          <motion.div 
            className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 justify-center items-center"
            variants={containerVariants}
          >
            {impacts.slice(0, 3).map((impact, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: smoothEasing }
                }}
                className="flex flex-col items-center gap-4 max-w-xs"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-[28px] overflow-hidden">
                  <Image
                    src={impact.image}
                    alt={impact.text}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-base md:text-lg lg:text-xl text-black text-center capitalize">
                  {impact.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 2 items */}
          <motion.div 
            className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 justify-center items-center"
            variants={containerVariants}
          >
            {impacts.slice(3, 5).map((impact, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: smoothEasing }
                }}
                className="flex flex-col items-center gap-4 max-w-xs"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-[28px] overflow-hidden">
                  <Image
                    src={impact.image}
                    alt={impact.text}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg md:text-xl lg:text-2xl text-black text-center capitalize">
                  {impact.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

