'use client';

import React from 'react';
import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const stats = [
  {
    number: '6M+',
    description: 'Women and girls in need of basic health services'
  },
  {
    number: '50%+',
    description: 'Healthcare facilities damaged or non-functional'
  },
  {
    number: '0',
    description: (
      <>
        <span className="font-bold">Privacy</span>
        <span className="font-medium"> in overcrowded clinics</span>
      </>
    )
  },
  {
    number: '1',
    description: (
      <>
        <span className="font-bold">missed visit</span>
        <span className="font-normal"> can become a preventable emergency</span>
      </>
    )
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing
    }
  }
};

export default function WhyThisMattersSection() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-12">
          {/* Left Column - Stats */}
          <div className="space-y-5">
            <div className="mb-6 lg:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F47B20]">
                Why This Matters
              </h2>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 gap-3.5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="border border-[#F47B20] p-3 md:p-4 lg:p-5 rounded-sm"
                  variants={cardVariants}
                >
                  <div className="mb-1">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#F47B20] leading-tight">
                      {stat.number}
                    </p>
                  </div>
                  <div className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
                    {typeof stat.description === 'string' ? (
                      <p className="font-medium">{stat.description}</p>
                    ) : (
                      <p>{stat.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Text */}
          <div className="flex items-start lg:items-start pt-20">
            <div className="sticky top-60">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#F47B20] leading-tight">
                These numbers reflect daily barriers women face while seeking basic medical care.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
