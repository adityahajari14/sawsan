'use client';

import React from 'react';
import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];
const gentleEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const impactItems = [
  {
    number: '01',
    title: '5 fully functioning health booths'
  },
  {
    number: '02',
    title: '5,000+ women supported'
  },
  {
    number: '03',
    title: '20–30 volunteer doctors'
  },
  {
    number: '04',
    title: 'Cross-border partnerships'
  },
  {
    number: '05',
    title: 'Clear, measurable outcomes'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.92,
    y: 30
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: gentleEasing
    }
  }
};

const numberVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.5
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: smoothEasing
    }
  }
};

export default function ImpactVision() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-10">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
            Our 12-Month Impact Vision
          </h2>

          {/* Flex Container */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {impactItems.map((item, index) => (
              <motion.div 
                key={index}
                className="border-2 border-[#F47B20] p-5 flex flex-col gap-5 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33%-1.5rem)] rounded-lg"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  borderColor: '#E85A28',
                  borderWidth: '3px',
                  boxShadow: "0 12px 28px rgba(244, 123, 32, 0.18)",
                  transition: { 
                    duration: 0.35,
                    ease: gentleEasing
                  }
                }}
              >
                {/* Number */}
                <motion.p 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFC396] leading-none"
                  variants={numberVariants}
                  whileHover={{ 
                    scale: 1.05,
                    color: '#F47B20',
                    transition: { 
                      duration: 0.3,
                      ease: smoothEasing
                    }
                  }}
                >
                  {item.number}
                </motion.p>

                {/* Title */}
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#F47B20] leading-tight">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
