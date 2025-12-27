'use client';

import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEasing
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEasing
    }
  }
};

const donationReasons = [
  {
    number: '01',
    text: 'Create private, women-only health spaces'
  },
  {
    number: '02',
    text: 'Connect underserved communities to licensed doctors'
  },
  {
    number: '03',
    text: 'Train local volunteers who understand the culture'
  },
  {
    number: '04',
    text: 'Operate responsibly in low-resource settings'
  }
];

export default function WhySupportMatters() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-10 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
          >
            <span className="text-black">Why Your </span>
            <span className="text-[#F47B20]">Support Matters</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl font-normal text-black max-w-4xl"
          >
            The Sawsan Alakhras Foundation is building a new model of women's healthcare access — one that prioritizes safety, respect, and medical integrity.
          </motion.p>
        </motion.div>

        {/* Donation Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-10 md:space-y-12"
        >
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-normal text-black"
          >
            Your donation helps us:
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {donationReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  backgroundColor: "#F47B20",
                  transition: { duration: 0.3, ease: smoothEasing }
                }}
                className="border border-[#F47B20] rounded-[50px] p-6 md:p-8 min-h-[320px] flex flex-col justify-between group cursor-pointer"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#F5B482] mb-6 transition-colors duration-300">
                  {reason.number}
                </p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#F47B20] group-hover:text-white transition-colors duration-300">
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

