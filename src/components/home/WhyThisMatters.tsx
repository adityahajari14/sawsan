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
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 lg:mb-16">
          <h2 
            ref={headingRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          {/* Left Column - Stats Cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* Stat 1 */}
            <div className="border-2 border-[#F47B20] rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="mb-4">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20] mb-3">
                  6M+
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-normal">
                  Women and girls in need of basic health services
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="border-2 border-[#F47B20] rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="mb-4">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20] mb-3">
                  50%+
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-normal">
                  Healthcare facilities damaged or non-functional
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="border-2 border-[#F47B20] rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="mb-4">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20] mb-3">
                  0
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-normal">
                  Privacy in overcrowded clinics
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Description Text */}
          <div className="lg:col-span-5 lg:pl-6">
            <p 
              ref={paragraphRef}
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-semibold"
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
