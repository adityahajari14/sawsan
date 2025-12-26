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

function QuoteText({ 
  words1, 
  words2, 
  highlightedWords 
}: { 
  words1: string[]; 
  words2: string[]; 
  highlightedWords: MotionValue<number>;
}) {
  const [count, setCount] = useState(0);

  useMotionValueEvent(highlightedWords, "change", (latest) => {
    setCount(Math.floor(latest));
  });

  const renderHighlightedText = (words: string[], startIndex: number) => {
    return words.map((word, index) => {
      const globalIndex = startIndex + index;
      const isHighlighted = globalIndex < count;
      
      return (
        <span
          key={index}
          className={`transition-colors duration-700 ease-in-out ${
            isHighlighted ? 'text-[#F47B20]' : 'text-gray-600'
          }`}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  return (
    <div className="relative z-10 space-y-6 md:space-y-8">
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-relaxed font-semibold">
        {renderHighlightedText(words1, 0)}
      </p>
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-relaxed font-semibold">
        {renderHighlightedText(words2, words1.length)}
      </p>
    </div>
  );
}

export default function FounderSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const headingText = "From the Founder";
  const headingWords = headingText.split(' ');

  const quoteText1 = "This foundation was created in memory of my mother, Sawsan. A woman who believed that dignity is not optional, especially in care. She taught me that listening is an act of respect, and compassion is something you do, not just feel. This work carries her name to honor those values and to hold us accountable to them every day.";
  const quoteText2 = "My hope is simple: that this foundation becomes a quiet, reliable place where women feel safe, heard, and supported when they need it most.";

  const words1 = quoteText1.split(' ');
  const words2 = quoteText2.split(' ');
  const totalWords = words1.length + words2.length;

  // Scroll progress for heading (0 to 1)
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

  // Scroll progress for quote (0 to 1)
  const { scrollYProgress: quoteScrollProgress } = useScroll({
    target: quoteRef,
    offset: ["start center", "center center"]
  });

  // Transform quote progress to number of highlighted words
  const highlightedWords = useTransform(
    quoteScrollProgress,
    [0, 1],
    [0, totalWords]
  );

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h3 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold relative"
          >
            <HeadingText 
              words={headingWords} 
              highlightedWords={headingHighlightedWords}
            />
          </h3>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-12">
          {/* Foundation Named Section */}
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900">
              The foundation is named in memory of
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F47B20]">
              Sawsan Mohammad Nizar Alakhras.
            </h2>
          </div>

          {/* Quote Section */}
          <div ref={quoteRef} className="max-w-4xl mx-auto relative px-4 md:px-8 py-8 md:py-12">
            {/* Opening Quote */}
            <div className="absolute -left-2 md:-left-4 top-0 text-[80px] md:text-[120px] lg:text-[130px] leading-none text-gray-400 font-karla">
              &ldquo;
            </div>

            {/* Main Quote Text */}
            <QuoteText 
              words1={words1} 
              words2={words2} 
              highlightedWords={highlightedWords}
            />

            {/* Closing Quote */}
            <div className="absolute -right-2 md:-right-4 bottom-0 text-[80px] md:text-[120px] lg:text-[130px] leading-none text-gray-400 font-karla">
              &rdquo;
            </div>
          </div>

          {/* Attribution */}
          <div className="text-right max-w-5xl mx-auto">
            <p className="text-base md:text-lg text-gray-900 italic">— Nisreen</p>
          </div>

          {/* Read Full Note Link */}
          <div className="max-w-5xl mx-auto">
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group"
            >
              <span className="text-base md:text-lg font-medium border-b border-[#F47B20] group-hover:border-[#E85A28]">
                Read full note
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
