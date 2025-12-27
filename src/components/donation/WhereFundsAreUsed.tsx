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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEasing
    }
  }
};

const fundCategories = [
  {
    number: '01',
    title: 'Health Booth Setup',
    description: 'Basic exam beds, diagnostic tools, privacy infrastructure'
  },
  {
    number: '02',
    title: 'Telemedicine Equipment',
    description: 'Tablets, secure systems, connectivity'
  },
  {
    number: '03',
    title: 'Volunteer Training',
    description: 'Medical protocols, patient care, follow-up support'
  },
  {
    number: '04',
    title: 'Operational Costs',
    description: 'Local coordination, logistics, maintenance'
  },
  {
    number: '05',
    title: 'Medical Governance',
    description: 'Oversight, documentation, and quality assurance'
  }
];

export default function WhereFundsAreUsed() {
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
            <span className="text-black">Where the </span>
            <span className="text-[#F47B20]">Funds Are Used</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-black"
          >
            Transparent Use of Funds
          </motion.p>
        </motion.div>

        {/* Fund Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16 md:space-y-20"
        >
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-black text-center"
          >
            Your donations support:
          </motion.p>

          {/* First Row - 3 items */}
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-8">
            {fundCategories.slice(0, 3).map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] group cursor-pointer"
              >
                {/* Number positioned outside top-left */}
                <p className="absolute -top-1 left-5 md:left-6 lg:left-8 text-3xl md:text-4xl lg:text-5xl font-bold text-[#F47B20] group-hover:text-[#FFDDC3] leading-none transition-colors duration-300">
                  {category.number}
                </p>
                
                {/* Circle */}
                <motion.div 
                  whileHover={{ 
                    backgroundColor: "#F47B20",
                    transition: { duration: 0.3, ease: smoothEasing }
                  }}
                  className="w-full h-full border border-dashed border-[#F15A24] rounded-full flex items-center justify-center p-5 md:p-6 lg:p-8"
                >
                  <div className="text-center space-y-2">
                    <p className="text-base md:text-lg lg:text-xl font-bold text-[#F47B20] group-hover:text-white leading-tight transition-colors duration-300">
                      {category.title}
                    </p>
                    <p className="text-xs md:text-sm lg:text-base font-normal text-black group-hover:text-white leading-snug transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 items */}
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-8">
            {fundCategories.slice(3, 5).map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] group cursor-pointer"
              >
                {/* Number positioned outside top-left */}
                <p className="absolute -top-1 left-5 md:left-6 lg:left-8 text-3xl md:text-4xl lg:text-5xl font-bold text-[#F47B20] group-hover:text-[#FFDDC3] leading-none transition-colors duration-300">
                  {category.number}
                </p>
                
                {/* Circle */}
                <motion.div 
                  whileHover={{ 
                    backgroundColor: "#F47B20",
                    transition: { duration: 0.3, ease: smoothEasing }
                  }}
                  className="w-full h-full border border-dashed border-[#F15A24] rounded-full flex items-center justify-center p-5 md:p-6 lg:p-8"
                >
                  <div className="text-center space-y-2">
                    <p className="text-base md:text-lg lg:text-xl font-bold text-[#F47B20] group-hover:text-white leading-tight transition-colors duration-300">
                      {category.title}
                    </p>
                    <p className="text-xs md:text-sm lg:text-base font-normal text-black group-hover:text-white leading-snug transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

