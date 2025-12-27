"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CardData {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  expandedDetails: string[];
}

const cardsData: CardData[] = [
  {
    id: 1,
    number: "01",
    title: "For Doctors",
    subtitle: "Your expertise can reach women who would otherwise go unseen.",
    description:
      "We invite licensed physicians especially those based in Saudi Arabia to join our volunteer telemedicine network.",
    ctaText: "Volunteer as a Doctor",
    expandedDetails: [
      "provide remote medical consultations",
      "guide patients through assessment and care planning",
      "offer clear recommendations and referrals",
      "support ethical, patient-centered care",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "For Donors",
    subtitle: "Your support turns care into reality.",
    description:
      "We grow carefully never faster than quality, ethics, and trust allow.",
    ctaText: "Support Women's Healthcare",
    expandedDetails: [
      "build and equip women-only health booths",
      "train Syrian medical and nursing volunteers",
      "maintain secure telemedicine systems",
      "ensure follow-up, continuity, and privacy",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "For Partners",
    subtitle: "Strong care systems are built together.",
    description:
      "If you share our commitment to dignity, accountability, and patient safety, we would welcome a conversation.",
    ctaText: "Partner With Us",
    expandedDetails: [
      "local NGOs and community organizations",
      "healthcare institutions",
      "academic partners",
      "ethical funding and implementation partners",
    ],
  },
];

// Refined easing curves for professional feel
const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];
const gentleEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function HowYouCanGetInvolved() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: smoothEasing }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F47B20] mb-6 md:mb-10"
        >
          How You Can Get Involved
        </motion.h2>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-5 md:gap-6">
          {cardsData.map((card, index) => {
            const isExpanded = expandedCard === card.id;
            const isOtherExpanded = expandedCard !== null && !isExpanded;
            const isHovered = hoveredCard === card.id && expandedCard === null;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                className="relative h-[420px] md:h-[400px]"
                animate={{
                  flex: isExpanded ? 2 : isOtherExpanded ? 0.6 : 1,
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12,
                  ease: smoothEasing
                }}
              >
                <motion.div
                  animate={{
                    backgroundColor: isExpanded || isHovered ? "#F47B20" : "#FFFFFF",
                    boxShadow: isHovered && !expandedCard 
                      ? "0 8px 30px -8px rgba(244, 123, 32, 0.35)" 
                      : isExpanded 
                        ? "0 12px 40px -12px rgba(244, 123, 32, 0.4)"
                        : "0 2px 8px -2px rgba(0, 0, 0, 0.08)",
                    y: isHovered && !expandedCard ? -4 : 0,
                  }}
                  transition={{
                    backgroundColor: { duration: 0.35, ease: gentleEasing },
                    boxShadow: { duration: 0.4, ease: gentleEasing },
                    y: { duration: 0.3, ease: gentleEasing },
                  }}
                  className="border-2 border-[#F47B20] rounded-[50px] p-6 md:p-8 lg:p-10 h-full flex flex-col gap-5 md:gap-6 cursor-pointer overflow-hidden"
                >
                  {/* Number */}
                  <motion.p
                    animate={{
                      color: isExpanded || isHovered ? "#FFFFFF" : "#000000",
                    }}
                    transition={{ duration: 0.3, ease: gentleEasing }}
                    className="text-3xl md:text-4xl font-bold"
                  >
                    {card.number}
                  </motion.p>

                  {/* Title */}
                  <motion.h3
                    animate={{
                      color: isExpanded || isHovered ? "#FFFFFF" : "#000000",
                    }}
                    transition={{ duration: 0.3, ease: gentleEasing }}
                    className="text-xl md:text-2xl font-bold"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Collapsed state - show "View more" when another card is expanded */}
                  <AnimatePresence mode="wait">
                    {isOtherExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: gentleEasing }}
                        className="flex items-center gap-2 text-black font-medium text-lg"
                      >
                        <span>View more</span>
                        <motion.div 
                          whileHover={{ x: 2, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Normal/Expanded Content */}
                  <AnimatePresence mode="wait">
                    {!isOtherExpanded && (
                      <motion.div
                        key={isExpanded ? "expanded" : "normal"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: gentleEasing }}
                        className="flex flex-col flex-1"
                      >
                        {isExpanded ? (
                          /* Expanded State - 2 Column Layout */
                          <motion.div 
                            className="flex flex-col lg:flex-row gap-6 lg:gap-10 h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1, ease: smoothEasing }}
                          >
                            {/* Left Column */}
                            <motion.div 
                              className="flex flex-col gap-5 md:gap-6 flex-1"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.15, ease: smoothEasing }}
                            >
                              {/* Subtitle */}
                              <p className="text-lg md:text-xl font-bold leading-snug text-white">
                                {card.subtitle}
                              </p>

                              {/* Description */}
                              <p className="text-sm md:text-base leading-relaxed text-white">
                                {card.description}
                              </p>

                              {/* CTA */}
                              <div className="flex items-center font-medium text-base text-white mt-auto cursor-pointer group relative overflow-hidden h-[28px]">
                                <div className="flex items-center gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-0">
                                  <span>{card.ctaText}</span>
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                  </svg>
                                </div>
                                <div className="absolute inset-0 flex items-center gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                  <span>{card.ctaText}</span>
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="transform rotate-45"
                                  >
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                  </svg>
                                </div>
                              </div>
                            </motion.div>

                            {/* Right Column - Expanded Details */}
                            <motion.div 
                              className="flex-1"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.2, ease: smoothEasing }}
                            >
                              <div className="text-white">
                                <p className="text-base md:text-lg font-semibold mb-3">
                                  {card.id === 1
                                    ? "As a volunteer doctor, you will:"
                                    : card.id === 2
                                    ? "Donations help us:"
                                    : "We collaborate with:"}
                                </p>
                                <ul className="space-y-2.5 text-sm md:text-base">
                                  {card.expandedDetails.map((detail, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: 8 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ 
                                        duration: 0.3, 
                                        delay: 0.25 + idx * 0.06,
                                        ease: smoothEasing 
                                      }}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="mt-1">•</span>
                                      <span>{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          </motion.div>
                        ) : (
                          /* Normal State - Single Column */
                          <div className="flex flex-col gap-5 md:gap-6 h-full">
                            {/* Subtitle */}
                            <motion.p
                              animate={{
                                color: isHovered ? "#FFFFFF" : "#000000",
                              }}
                              transition={{ duration: 0.3, ease: gentleEasing }}
                              className="text-lg md:text-xl font-bold leading-snug"
                            >
                              {card.subtitle}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                              animate={{
                                color: isHovered ? "#FFFFFF" : "#000000",
                              }}
                              transition={{ duration: 0.3, ease: gentleEasing }}
                              className="text-sm md:text-base leading-relaxed"
                            >
                              {card.description}
                            </motion.p>

                            {/* CTA */}
                            <motion.div
                              className="cursor-pointer relative overflow-hidden h-[28px]"
                            >
                              <motion.div 
                                animate={{
                                  y: isHovered ? "-100%" : "0%",
                                  opacity: isHovered ? 0 : 1,
                                  color: isHovered ? "#FFFFFF" : "#F47B20",
                                }}
                                transition={{ duration: 0.35, ease: gentleEasing }}
                                className="flex items-center gap-2.5 font-medium text-base"
                              >
                                <span>{card.ctaText}</span>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                              </motion.div>
                              <motion.div 
                                animate={{
                                  y: isHovered ? "0%" : "100%",
                                  opacity: isHovered ? 1 : 0,
                                }}
                                transition={{ duration: 0.35, ease: gentleEasing }}
                                className="absolute inset-0 flex items-center gap-2.5 font-medium text-base text-white"
                              >
                                <span>{card.ctaText}</span>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="transform rotate-45"
                                >
                                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                              </motion.div>
                            </motion.div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
