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

function ParagraphText({ 
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

export default function WhyThisMatters() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const headingText = "Why This Matters";
  const headingWords = headingText.split(' ');

  const paragraphText = "These numbers reflect daily barriers women face while seeking basic medical care.";
  const paragraphWords = paragraphText.split(' ');

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

  // Scroll progress for paragraph
  const { scrollYProgress: paragraphScrollProgress } = useScroll({
    target: paragraphRef,
    offset: ["start center", "center center"]
  });

  // Transform paragraph progress to number of highlighted words
  const paragraphHighlightedWords = useTransform(
    paragraphScrollProgress,
    [0, 1],
    [0, paragraphWords.length]
  );

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8"
          >
            <HeadingText 
              words={headingWords} 
              highlightedWords={headingHighlightedWords}
            />
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#F47B20] hover:text-[#E85A28] transition-colors text-base md:text-lg font-medium group"
          >
            <span className="border-b border-[#F47B20] group-hover:border-[#E85A28]">
              Learn more
            </span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column - Stats Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stat 1 */}
            <div className="border-2 border-[#F47B20] rounded-2xl p-8 md:p-10 lg:p-12">
              <div className="mb-6">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F47B20] mb-4">
                  6M+
                </h3>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-normal">
                  Women and girls in need of basic health services
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="border-2 border-[#F47B20] rounded-2xl p-8 md:p-10 lg:p-12">
              <div className="mb-6">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F47B20] mb-4">
                  50%+
                </h3>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-normal">
                  Healthcare facilities damaged or non-functional
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="border-2 border-[#F47B20] rounded-2xl p-8 md:p-10 lg:p-12">
              <div className="mb-6">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F47B20] mb-4">
                  0
                </h3>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-normal">
                  Privacy in overcrowded clinics
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Description Text */}
          <div className="lg:col-span-5 lg:pl-8">
            <p 
              ref={paragraphRef}
              className="text-3xl md:text-4xl lg:text-5xl leading-relaxed font-semibold"
            >
              <ParagraphText 
                words={paragraphWords} 
                highlightedWords={paragraphHighlightedWords}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
