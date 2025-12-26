'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

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
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-[865px]">
            <h2 
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12"
            >
              <HeadingText 
                words={headingWords} 
                highlightedWords={headingHighlightedWords}
              />
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-[623px]">
              Whether you give your time, resources, or reach, you help bring safe, dignified healthcare to women who need it most.
            </p>
          </div>

          {/* Right Column - CTA Links */}
          <div className="flex flex-col self-end gap-6 lg:gap-8 lg:min-w-[257px]">
            <Link
              href="#"
              className="text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group inline-block"
            >
              <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
                Donate Now
              </span>
            </Link>
            
            <Link
              href="#"
              className="text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group inline-block"
            >
              <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
                Partner With Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
