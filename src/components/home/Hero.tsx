'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: (custom: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: smoothEasing
    }
  })
};

const ArrowIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M44.2714 14.758H14.7614V19.6774H35.875L13.7425 41.8146L17.2203 45.2931L39.353 23.1557V44.2743H44.2714V14.758Z"
      fill="#111010"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 font-karla">
      <div className="max-w-8xl mx-auto">
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
            <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center">She <span className="text-[#F47B20]">Waited.</span> She <span className="text-[#F47B20]">Hoped.</span></h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center">She <span className="text-[#F47B20]">Needed</span> Care.</h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-black text-center">We bring trusted, dignified healthcare directly into underserved Syrian communities, one booth, one volunteer, one doctor, one woman at a time.</p>
        </div>
        <motion.div 
          className="flex flex-row gap-5 items-end justify-between -mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
            {/* Card Column 1 */}
            <motion.div 
              className="flex flex-col gap-6"
              variants={cardVariants}
              custom={0}
            >
                <div className="relative flex flex-col gap-8 items-center justify-end bg-[#F15A24] text-white p-4 rounded-4xl min-h-100 w-full max-w-70 overflow-hidden left-path"> 
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-0'>
                        <div className='flex flex-col items-center justify-center gap-2 w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="295" height="73" viewBox="0 0 295 73" fill="none" className="w-full h-auto opacity-10">
                                <path d="M91.956 0L-3.80005 54.6775V72.9033L91.956 20.2509L267.509 72.9033L340.466 42.5269V30.3764L274.348 54.6775L91.956 0Z" fill="white" fillOpacity="1"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="295" height="94" viewBox="0 0 295 94" fill="none" className="w-full h-auto opacity-10">
                                <path d="M88.1472 0L-20.0007 69.8657V93.1542L88.1472 25.8762L286.419 93.1542L368.817 54.34V38.8143L294.143 69.8657L88.1472 0Z" fill="white" fillOpacity="1"/>
                            </svg>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="relative z-10 text-2xl md:text-3xl font-semibold">Rooted in Compassion. Built for Women.</div>
                    <div className="relative z-10 w-full">
                      <button className="group relative h-16 w-full rounded-full overflow-visible transition-all duration-300 ease-in-out cursor-pointer">
                        {/* Outer border layer */}
                        <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"></div>
                        {/* Black inner border */}
                        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-[#F15A24]"></div>
                        {/* Gradient background with shadows */}
                        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[rgba(241,90,36,0.2)] group-hover:bg-[rgba(241,90,36,0.9)] transition-all duration-300 shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                        {/* Content layer */}
                        <div className="relative z-4 h-full w-full flex items-center">
                          <p className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-sm md:text-base leading-[1.4] text-white whitespace-nowrap tracking-wide">
                            Join the movement
                          </p>
                          <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-white flex items-center justify-center p-2.5 rounded-full w-12 h-12 transition-transform duration-300">
                            <div className="relative w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                              <ArrowIcon />
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                </div>
                <div className="bg-black/80 overflow-hidden relative rounded-4xl w-full h-40 md:h-36 max-w-70 flex items-center justify-center px-10">
                  <p className="font-bold text-2xl text-white text-left">
                    More intimate
                  </p>
                </div>
            </motion.div>

            {/* Card Column 2 */}
            <motion.div 
              className='flex flex-col justify-end'
              variants={cardVariants}
              custom={1}
            >
                <div className="relative flex flex-col gap-6 items-center justify-end bg-[#F15A24] text-white p-4 rounded-4xl min-h-100 w-full max-w-70 overflow-hidden left-path">
                    <Image 
                      src="/hero-img1.webp" 
                      alt="Hero 2" 
                      fill
                      className="object-cover absolute inset-0 z-0"
                      style={{ borderRadius: "inherit" }}
                      sizes="(max-width: 768px) 100vw, 295px"
                    />
                    <div className="absolute inset-0 bg-black/50 z-0" style={{ borderRadius: "inherit" }}></div>
                    <div className="relative z-10 text-lg md:text-xl font-semibold">Millions of women lack access to female-only health spaces</div>
                </div>
            </motion.div>

            {/* Card Column 3 */}
            <motion.div
              variants={cardVariants}
              custom={2}
            >
                <div className="bg-[#F15A24] overflow-hidden relative rounded-4xl w-full h-44 md:h-48 max-w-70 flex items-center justify-center px-10">
                  <p className="font-bold text-2xl text-white text-left">
                    Care, With Dignity at the Center
                  </p>
                </div>
            </motion.div>

            {/* Card Column 4 */}
            <motion.div 
              className='flex flex-col justify-end'
              variants={cardVariants}
              custom={1}
            >
                <div className="relative flex flex-col gap-6 items-center justify-end bg-[#F15A24] text-white p-4 rounded-4xl min-h-100 w-full max-w-70 overflow-hidden right-path">
                    <Image 
                      src="/hero-img2.webp" 
                      alt="Hero 2" 
                      fill
                      className="object-cover absolute inset-0 z-0"
                      style={{ borderRadius: "inherit" }}
                      sizes="(max-width: 768px) 100vw, 295px"
                    />
                    <div className="absolute inset-0 bg-black/50 z-0" style={{ borderRadius: "inherit" }}></div>
                    <div className="relative z-10 text-lg md:text-xl font-semibold">One missed visit can be fatal</div>
                </div>
            </motion.div>

            {/* Card Column 5 */}
            <motion.div 
              className="flex flex-col gap-5"
              variants={cardVariants}
              custom={0}
            >
                <div className="relative flex flex-col gap-6 items-center justify-between pt-20 bg-[#F15A24] text-white p-4 rounded-4xl min-h-100 w-full max-w-70 overflow-hidden right-path"> 
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-0'>
                        <div className='flex flex-col items-center justify-center gap-2 w-full h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="295" height="73" viewBox="0 0 295 73" fill="none" className="w-full h-auto opacity-10">
                                <path d="M91.956 0L-3.80005 54.6775V72.9033L91.956 20.2509L267.509 72.9033L340.466 42.5269V30.3764L274.348 54.6775L91.956 0Z" fill="white" fillOpacity="1"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="295" height="94" viewBox="0 0 295 94" fill="none" className="w-full h-auto opacity-10">
                                <path d="M88.1472 0L-20.0007 69.8657V93.1542L88.1472 25.8762L286.419 93.1542L368.817 54.34V38.8143L294.143 69.8657L88.1472 0Z" fill="white" fillOpacity="1"/>
                            </svg>
                        </div>
                    </div>
                    {/* Content */}
                    <Image
                      src="/hero-img3.webp"
                      alt="Gallery Background"
                      fill
                      className="object-cover absolute inset-0 z-0"
                      style={{ borderRadius: "inherit" }}
                      sizes="(max-width: 768px) 100vw, 295px"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" style={{ borderRadius: "inherit" }}></div>
                    <div className="relative z-10 text-2xl md:text-3xl font-semibold">Gallery</div>
                    <div className="relative z-10 w-full">
                      <button className="group relative h-16 w-full rounded-full overflow-visible transition-all duration-300 ease-in-out cursor-pointer">
                        {/* Outer border layer */}
                        <div className="absolute left-0 right-0 top-0 bottom-0 z-1 rounded-full buttonBorder"></div>
                        {/* Black inner border */}
                        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-2 rounded-full m-[1.2px] bg-[#F15A24]"></div>
                        {/* Gradient background with shadows */}
                        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-3 rounded-full m-[1.2px] bg-[rgba(241,90,36,0.2)] group-hover:bg-[rgba(241,90,36,0.9)] transition-all duration-300 shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
                        {/* Content layer */}
                        <div className="relative z-4 h-full w-full flex items-center">
                          <p className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-sm md:text-base leading-[1.4] text-white whitespace-nowrap tracking-wide">
                          View all
                          </p>
                          <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-white flex items-center justify-center p-2.5 rounded-full w-12 h-12 transition-transform duration-300">
                            <div className="relative w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                              <ArrowIcon />
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                </div>
                <div className="bg-black/80 overflow-hidden relative rounded-4xl w-full h-40 md:h-36 max-w-70 flex items-center justify-center px-10">
                  <p className="font-bold text-2xl text-white text-left">
                  Less institutional.
                  </p>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}