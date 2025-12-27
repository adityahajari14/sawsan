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
    <div className="relative z-10 space-y-5 md:space-y-6">
      <p className="text-xl md:text-2xl lg:text-3xl xl:text-[36px] leading-relaxed font-semibold">
        {renderHighlightedText(words1, 0)}
      </p>
      <p className="text-xl md:text-2xl lg:text-3xl xl:text-[36px] leading-relaxed font-semibold">
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
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12">
          <h3 
            ref={headingRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold relative"
          >
            <HeadingText 
              words={headingWords} 
              highlightedWords={headingHighlightedWords}
            />
          </h3>
        </div>

        {/* Main Content */}
        <div className="space-y-6 md:space-y-10">
          {/* Foundation Named Section */}
          <div className="text-center space-y-2 md:space-y-3">
            <p className="text-base md:text-lg lg:text-xl text-gray-900">
              The foundation is named in memory of
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F47B20]">
              Sawsan Mohammad Nizar Alakhras.
            </h2>
          </div>

          {/* Quote Section */}
          <div ref={quoteRef} className="max-w-4xl mx-auto relative px-4 md:px-8 py-6 md:py-10">
            {/* Opening Quote */}
            <div className="absolute -left-2 md:-left-4 top-0 text-[60px] md:text-[90px] lg:text-[100px] leading-none text-gray-400 font-karla">
              &ldquo;
            </div>

            {/* Main Quote Text */}
            <QuoteText 
              words1={words1} 
              words2={words2} 
              highlightedWords={highlightedWords}
            />

            {/* Closing Quote */}
            <div className="absolute -right-2 md:-right-4 bottom-0 text-[60px] md:text-[90px] lg:text-[100px] leading-none text-gray-400 font-karla">
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
              className="inline-flex items-center gap-3 text-[#F47B20] hover:text-[#E85A28] transition-colors group relative overflow-hidden h-[32px]"
            >
              <div className="flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                <span className="text-base md:text-lg font-medium">
                  Read full note
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-500"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-base md:text-lg font-medium">
                  Read full note
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-45 transition-transform duration-500"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
