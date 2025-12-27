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

export default function HowYouCanGetInvolved() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F47B20] mb-8 md:mb-12"
        >
          How You Can Get Involved
        </motion.h2>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {cardsData.map((card, index) => {
            const isExpanded = expandedCard === card.id;
            const isOtherExpanded = expandedCard !== null && !isExpanded;
            const isHovered = hoveredCard === card.id && expandedCard === null;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, flex: { duration: 0.5, ease: "easeInOut" } }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  setExpandedCard(isExpanded ? null : card.id)
                }
                className="relative max-h-[600px]"
                animate={{
                  flex: isExpanded ? 2 : isOtherExpanded ? 0.6 : 1,
                }}
              >
                <motion.div
                  animate={{
                    backgroundColor:
                      isExpanded || isHovered ? "#F47B20" : "#FFFFFF",
                    scale: isHovered && !expandedCard ? 1.02 : 1,
                  }}
                  transition={{
                    backgroundColor: { duration: 0.3 },
                    scale: { duration: 0.2 },
                  }}
                  className="border-2 border-[#F47B20] rounded-[50px] p-8 md:p-10 lg:p-12 h-full flex flex-col gap-6 md:gap-8 cursor-pointer overflow-hidden"
                >
                  {/* Number */}
                  <motion.p
                    animate={{
                      color:
                        isExpanded || isHovered ? "#FFFFFF" : "#000000",
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl md:text-5xl font-bold"
                  >
                    {card.number}
                  </motion.p>

                  {/* Title */}
                  <motion.h3
                    animate={{
                      color:
                        isExpanded || isHovered ? "#FFFFFF" : "#000000",
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl md:text-3xl font-bold"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Collapsed state - show "View more" when another card is expanded */}
                  <AnimatePresence mode="wait">
                    {isOtherExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-black font-medium text-lg"
                      >
                        <span>View more</span>
                        <div className="-rotate-45">
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
                        transition={{ duration: 0.25 }}
                        className="flex flex-col flex-1"
                      >
                        {isExpanded ? (
                          /* Expanded State - 2 Column Layout */
                          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
                            {/* Left Column */}
                            <div className="flex flex-col gap-6 md:gap-8 flex-1">
                              {/* Subtitle */}
                              <p className="text-xl md:text-2xl font-bold leading-snug text-white">
                                {card.subtitle}
                              </p>

                              {/* Description */}
                              <p className="text-base md:text-lg leading-relaxed text-white">
                                {card.description}
                              </p>

                              {/* CTA */}
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 font-medium text-lg text-white mt-auto"
                              >
                                <span>{card.ctaText}</span>
                                <div className="-rotate-45">
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
                              </motion.div>
                            </div>

                            {/* Right Column - Expanded Details */}
                            <div className="flex-1">
                              <div className="text-white">
                                <p className="text-lg md:text-xl font-semibold mb-4">
                                  {card.id === 1
                                    ? "As a volunteer doctor, you will:"
                                    : card.id === 2
                                    ? "Donations help us:"
                                    : "We collaborate with:"}
                                </p>
                                <ul className="space-y-3 text-base md:text-lg">
                                  {card.expandedDetails.map((detail, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="mt-1">•</span>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Normal State - Single Column */
                          <div className="flex flex-col gap-6 md:gap-8 h-full">
                            {/* Subtitle */}
                            <motion.p
                              animate={{
                                color: isHovered ? "#FFFFFF" : "#000000",
                              }}
                              transition={{ duration: 0.2 }}
                              className="text-xl md:text-2xl font-bold leading-snug"
                            >
                              {card.subtitle}
                            </motion.p>

                            {/* Description */}
                            <motion.p
                              animate={{
                                color: isHovered ? "#FFFFFF" : "#000000",
                              }}
                              transition={{ duration: 0.2 }}
                              className="text-base md:text-lg leading-relaxed"
                            >
                              {card.description}
                            </motion.p>

                            {/* CTA */}
                            <motion.div
                              animate={{
                                color: isHovered ? "#FFFFFF" : "#F47B20",
                              }}
                              transition={{ duration: 0.2 }}
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 font-medium text-lg mt-auto"
                            >
                              <span>{card.ctaText}</span>
                              <div className="-rotate-45">
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
