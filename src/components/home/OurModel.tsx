
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 'booth',
    title: 'The Booth — A Safe Space',
    content: 'A private, women-only micro-clinic inside a trusted local NGO. Simple, dignified, and safe.',
    bgColor: 'bg-[#F47B20]',
    hoverColor: 'hover:bg-[#E85A28]',
    textColor: 'text-white'
  },
  {
    id: 'volunteer',
    title: 'The Volunteer — The Human Connection',
    content: 'Syrian medical and nursing students trained to listen, assist, and support women through care and follow-up.',
    bgColor: 'bg-[#8B6F47]',
    hoverColor: 'hover:bg-[#7A5F3D]',
    textColor: 'text-white'
  },
  {
    id: 'doctors',
    title: 'The Doctors — Expertise Without Borders',
    content: 'Saudi-based licensed physicians providing telemedicine consultations, guidance, and referrals under strict medical governance.',
    bgColor: 'bg-[#F47B20]',
    hoverColor: 'hover:bg-[#E85A28]',
    textColor: 'text-white'
  },
  {
    id: 'digital',
    title: 'The Digital Layer — Simple by Design',
    content: 'A lightweight system to schedule visits, record notes, issue prescriptions, and track follow-ups.',
    bgColor: 'bg-white',
    hoverColor: 'hover:bg-gray-50',
    textColor: 'text-gray-900'
  }
];

export default function OurModel() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20]">
              Our Model
            </h2>
            <p className="text-lg md:text-xl text-[#F47B20] leading-relaxed max-w-xl">
              Every person deserves respect in every interaction. Care is only credible when humanity comes first.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3 max-w-xl lg:ml-auto">
            {accordionItems.map((item) => {
              const isOpen = openItems.has(item.id);
              const isDigital = item.id === 'digital';
              
              return (
                <motion.div
                  key={item.id}
                  className={`${
                    isOpen
                      ? isDigital
                        ? 'border-2 border-gray-400 bg-white'
                        : `${item.bgColor} ${item.textColor}`
                      : isDigital
                        ? 'border-2 border-gray-400 bg-white'
                        : `${item.bgColor} ${item.hoverColor} ${item.textColor}`
                  } rounded-xl px-5 py-4 cursor-pointer overflow-hidden`}
                  onClick={() => toggleItem(item.id)}
                  initial={false}
                  animate={{
                    backgroundColor: isOpen 
                      ? (isDigital ? '#ffffff' : undefined)
                      : undefined
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold pr-4 ${isOpen && isDigital ? 'text-gray-900' : item.textColor}`}>
                      {item.title}
                    </h3>
                    <motion.div 
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        isOpen
                          ? isDigital
                            ? 'bg-[#F47B20]'
                            : 'bg-white'
                          : isDigital
                            ? 'bg-gray-300'
                            : 'bg-white'
                      }`}
                      animate={{ rotate: isOpen ? 0 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <motion.svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={isDigital ? 'stroke-white' : 'stroke-[#F47B20]'}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            d="M5 12h14"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      ) : (
                        <motion.svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={isDigital ? 'stroke-gray-600' : 'stroke-[#F47B20]'}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            d="M12 5v14M5 12h14"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                    </motion.div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-4">
                          <p className={`text-sm md:text-base leading-relaxed ${
                            isDigital ? 'text-gray-700' : 'text-white'
                          }`}>
                            {item.content}
                          </p>
                          <button className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors group ${
                            isDigital 
                              ? 'border-gray-900 hover:bg-gray-900' 
                              : 'border-white hover:bg-white'
                          }`}>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`transform -rotate-45 ${
                                isDigital 
                                  ? 'group-hover:stroke-white stroke-gray-900 transition-colors'
                                  : 'group-hover:stroke-[#F47B20] stroke-white transition-colors'
                              }`}
                            >
                              <path
                                d="M5 12h14M12 5l7 7-7 7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
