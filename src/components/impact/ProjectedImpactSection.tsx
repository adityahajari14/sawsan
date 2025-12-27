'use client';

import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEasing
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEasing
    }
  }
};

const outcomes = [
  {
    number: "01",
    text: "5 fully functioning women-only health booths"
  },
  {
    number: "02",
    text: "5,000+ women supported with medical guidance"
  },
  {
    number: "03",
    text: "20–30 volunteer doctors providing remote consultations"
  },
  {
    number: "04",
    text: "Local volunteers trained in patient care and follow-up"
  },
  {
    number: "05",
    text: "Cross-border partnerships between Syria and Saudi Arabia"
  },
  {
    number: "06",
    text: "Reliable data collection to evaluate outcomes and improve care"
  }
];

export default function ProjectedImpactSection() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
          >
            <span className="text-black">Our </span>
            <span className="text-[#F47B20]">12-Month Projected Impact</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4 md:mb-6 text-black"
          >
            Year One: <span className="font-bold">A Responsible Beginning</span>
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-black leading-relaxed"
          >
            In our first 12 months, our goal is to establish a strong, ethical foundation for long-term impact.
          </motion.p>
        </div>

        {/* Outcomes Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black mb-8 md:mb-10">
            Projected Outcomes:
          </h3>
          
          {/* Outcomes Grid */}
          <div className="space-y-4">
            {/* First Row - 3 cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {outcomes.slice(0, 3).map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3, ease: smoothEasing }
                  }}
                  className="border border-[#F47B20] rounded-[50px] p-6 md:p-8 flex flex-col gap-6 md:gap-8 min-h-[240px]"
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5B482]">
                    {outcome.number}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#F47B20] leading-snug">
                    {outcome.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row - 3 cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {outcomes.slice(3, 6).map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3, ease: smoothEasing }
                  }}
                  className="border border-[#F47B20] rounded-[50px] p-6 md:p-8 flex flex-col gap-6 md:gap-8 min-h-[240px]"
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5B482]">
                    {outcome.number}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#F47B20] leading-snug">
                    {outcome.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

