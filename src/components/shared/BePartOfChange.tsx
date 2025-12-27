'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, useMotionValueEvent, MotionValue, motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

function HeadingText({ 
  words, 
  highlightedWords 
}: { 
  words: string[]; 
  highlightedWords: MotionValue<number>;
}) {
  const [count, setCount] = useState(0);

  useMotionValueEvent(highlightedWords, "change", (latest) => {
    setCount(Math.floor(latest));
  });

  return (
    <>
      {words.map((word, index) => {
        const isHighlighted = index < count;
        
        return (
          <span
            key={index}
            className={`transition-colors duration-700 ease-in-out ${
              isHighlighted ? 'text-black' : 'text-gray-300'
            }`}
          >
            {word}
            {index < words.length - 1 && ' '}
          </span>
        );
      })}
    </>
  );
}

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
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

const linkVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: (custom: number) => ({ 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: smoothEasing
    }
  })
};

export default function BePartOfChange() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const headingText = "Be Part of the Change";
  const headingWords = headingText.split(' ');

  // Scroll progress for heading
  const { scrollYProgress: headingScrollProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "center center"]
  });

  // Transform heading progress to number of highlighted words
  const headingHighlightedWords = useTransform(
    headingScrollProgress,
    [0, 1],
    [0, headingWords.length]
  );

  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-[865px]">
            <h2 
              ref={headingRef}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-10"
            >
              <HeadingText 
                words={headingWords} 
                highlightedWords={headingHighlightedWords}
              />
            </h2>
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-[623px]"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              Whether you give your time, resources, or reach, you help bring safe, dignified healthcare to women who need it most.
            </motion.p>
          </div>

          {/* Right Column - CTA Links */}
          <motion.div 
            className="flex flex-col self-end gap-5 lg:gap-6 lg:min-w-[257px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={linkVariants} custom={0}>
              <Link
                href="#"
                className="text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group inline-block relative overflow-hidden h-[28px]"
              >
                <div className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                  Donate Now
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Donate Now
                </div>
              </Link>
            </motion.div>
            
            <motion.div variants={linkVariants} custom={1}>
              <Link
                href="#"
                className="text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group inline-block relative overflow-hidden h-[28px]"
              >
                <div className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                  Partner With Us
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Partner With Us
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
