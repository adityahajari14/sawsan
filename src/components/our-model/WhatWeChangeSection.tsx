'use client';

import React from 'react';
import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];
const gentleEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

interface ChangeItem {
  icon: React.ReactNode;
  title: string;
}

const changeItems: ChangeItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
<g clipPath="url(#clip0_2045_1811)">
<path d="M1.25 20.6428H6.25C7.9076 20.6428 9.49731 21.2825 10.6694 22.4211C11.8415 23.5597 12.5 25.104 12.5 26.7143" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 26.7144H17.5C18.8261 26.7144 20.0979 27.2261 21.0355 28.137C21.9732 29.0479 22.5 30.2833 22.5 31.5715C22.5 31.8935 22.3683 32.2024 22.1339 32.4301C21.8995 32.6579 21.5815 32.7858 21.25 32.7858H1.25" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.875 20.6428L11.875 11.657C6.425 6.33848 14.375 -3.95867 21.875 4.37133C29.375 -3.93438 37.4 6.36276 31.875 11.657L21.875 20.6428Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2045_1811">
<rect width="35" height="34" fill="white"/>
</clipPath>
</defs>
</svg>
    ),
    title: 'Private, women-only health booths'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<path d="M16.9999 19.4287C20.3531 19.4287 23.0713 16.7105 23.0713 13.3573C23.0713 10.0042 20.3531 7.28589 16.9999 7.28589C13.6467 7.28589 10.9285 10.0042 10.9285 13.3573C10.9285 16.7105 13.6467 19.4287 16.9999 19.4287Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.09998 32.7858C5.65737 30.0408 7.1466 27.5729 9.31535 25.8003C11.4841 24.0277 14.199 23.0593 17 23.0593C19.801 23.0593 22.5159 24.0277 24.6846 25.8003C26.8533 27.5729 28.3426 30.0408 28.9 32.7858" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.3571 1.21436H3.6428C2.30154 1.21436 1.21423 2.30166 1.21423 3.64293V30.3572C1.21423 31.6985 2.30154 32.7858 3.6428 32.7858H30.3571C31.6984 32.7858 32.7857 31.6985 32.7857 30.3572V3.64293C32.7857 2.30166 31.6984 1.21436 30.3571 1.21436Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
    title: 'Trained local volunteers'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<path d="M32.7857 25.5V30.3571C32.7857 31.0012 32.5298 31.619 32.0744 32.0744C31.619 32.5298 31.0012 32.7857 30.3571 32.7857H25.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.5 1.21436H30.3571C31.0012 1.21436 31.619 1.47022 32.0744 1.92567C32.5298 2.38111 32.7857 2.99883 32.7857 3.64293V8.50007" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.21428 8.50007V3.64293C1.21428 2.99883 1.47015 2.38111 1.92559 1.92567C2.38104 1.47022 2.99875 1.21436 3.64285 1.21436H8.49999" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.49999 32.7857H3.64285C2.99875 32.7857 2.38104 32.5298 1.92559 32.0744C1.47015 31.619 1.21428 31.0012 1.21428 30.3571V25.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 15.7858C19.6825 15.7858 21.8571 13.6112 21.8571 10.9287C21.8571 8.24615 19.6825 6.07153 17 6.07153C14.3175 6.07153 12.1429 8.24615 12.1429 10.9287C12.1429 13.6112 14.3175 15.7858 17 15.7858Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.6743 25.5C23.9837 24.0498 22.8962 22.8249 21.538 21.9673C20.1798 21.1097 18.6063 20.6545 17 20.6545C15.3937 20.6545 13.8202 21.1097 12.462 21.9673C11.1038 22.8249 10.0163 24.0498 9.32571 25.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
    title: 'Remote consultations with qualified doctors'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
<path d="M16.9999 30.2356L3.59423 18.0927C-3.69148 10.807 7.01852 -3.18154 16.9999 8.13561C26.9814 -3.18154 37.6428 10.8556 30.4057 18.0927L16.9999 30.2356Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
    title: 'Care designed around dignity, privacy, and follow-up'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.96
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: gentleEasing
    }
  }
};

const iconVariants = {
  hidden: { 
    scale: 0.8,
    rotate: -10
  },
  visible: { 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: smoothEasing
    }
  }
};

export default function WhatWeChangeSection() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-10 lg:space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-black leading-tight">
              <span>What We </span>
              <span className="text-[#F47B20]">Change</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
              We bring care closer physically and emotionally.
            </p>
          </div>

          {/* Grid of Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {changeItems.map((item, index) => (
              <motion.div 
                key={index}
                className="border-2 border-[#F47B20] rounded-3xl p-6 lg:p-8 flex flex-col gap-6 min-h-52"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  borderColor: '#E85A28',
                  boxShadow: "0 16px 32px rgba(244, 123, 32, 0.2)",
                  transition: { 
                    duration: 0.35,
                    ease: gentleEasing
                  }
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="w-18 h-18 bg-[#F47B20] rounded-full flex items-center justify-center shrink-0"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.08,
                    rotate: 5,
                    backgroundColor: '#E85A28',
                    transition: { 
                      duration: 0.3,
                      ease: smoothEasing
                    }
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
