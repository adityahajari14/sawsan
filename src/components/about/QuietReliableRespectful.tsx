'use client';

import React, { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function QuietReliableRespectful() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [highlightedCount, setHighlightedCount] = useState(0);

  // Scroll progress for text
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "center 40%"]
  });

  // Split text into individual words
  const allWords = ['Quiet', '.', 'Reliable', '.', 'Respectful', '.'];

  // Transform scroll progress to number of highlighted words (0 to 6)
  const highlightedWords = useTransform(
    scrollYProgress,
    [0, 1],
    [0, allWords.length]
  );

  useMotionValueEvent(highlightedWords, "change", (latest) => {
    setHighlightedCount(Math.floor(latest));
  });

  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 
            ref={textRef}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed"
          >
            {allWords.map((word, index) => (
              <span
                key={index}
                className={`transition-colors duration-700 ease-in-out ${
                  word === '.' 
                    ? 'text-[#F47B20]' 
                    : index < highlightedCount 
                      ? 'text-black' 
                      : 'text-gray-300'
                }`}
              >
                {word === '.' ? `. ${index < allWords.length - 1 ? '' : ''}` : word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}