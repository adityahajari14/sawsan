'use client';

import React, { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

function HighlightedText({ 
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
              isHighlighted ? 'text-[#F47B20]' : 'text-gray-300'
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

export default function FirstPhaseSection() {
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = "We are in our first phase building carefully, responsibly and with deep respect for the communities we serve.";
  const words = text.split(' ');

  // Scroll progress for text
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "center 0.4"]
  });

  // Transform scroll progress to number of highlighted words
  const highlightedWords = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length]
  );

  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <p 
          ref={textRef}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-6xl mx-auto"
        >
          <HighlightedText 
            words={words} 
            highlightedWords={highlightedWords}
          />
        </p>
      </div>
    </section>
  );
}
