'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEasing,
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing
    }
  }
};

const checkboxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: smoothEasing
    }
  }
};

export default function DonationForm() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleCheckboxChange = (role: string) => {
    setSelectedRoles(prevRoles =>
      prevRoles.includes(role)
        ? prevRoles.filter(r => r !== role)
        : [...prevRoles, role]
    );
  };

  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
      <motion.div
        className="max-w-4xl mx-auto bg-white border border-[#F47B20] rounded-xl shadow-lg p-6 md:p-10 lg:p-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-bold text-[#F47B20] mb-6 md:mb-8"
        >
          Get Involved
        </motion.h2>

        <form className="space-y-5">
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs font-normal text-black mb-1">Full Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full border border-gray-400 rounded-md p-3 text-sm shadow-sm focus:outline-none focus:border-[#F47B20]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full border border-gray-400 rounded-md p-3 text-sm shadow-sm focus:outline-none focus:border-[#F47B20] mt-6"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="location" className="block text-xs font-normal text-black mb-1">Location</label>
            <div className="relative">
              <input
                type="text"
                id="location"
                placeholder="Syria"
                className="w-full border border-gray-400 rounded-md p-3 pl-10 text-sm shadow-sm focus:outline-none focus:border-[#F47B20]"
              />
              {/* Location Icon */}
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {/* Dropdown Arrow */}
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-xs font-normal text-black mb-1">E-mail Address</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail Address"
              className="w-full border border-gray-400 rounded-md p-3 text-sm shadow-sm focus:outline-none focus:border-[#F47B20]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="block text-xs font-normal text-black mb-1">Phone number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-400 bg-gray-50 text-gray-600 text-sm">
                +963
              </span>
              <input
                type="tel"
                id="phone"
                placeholder="Phone number"
                className="flex-1 border border-gray-400 rounded-r-md p-3 text-sm shadow-sm focus:outline-none focus:border-[#F47B20]"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="block text-xs font-normal text-black mb-2">Join as:</p>
            <div className="flex flex-wrap gap-5">
              {['Doctor', 'Donor', 'Volunteer', 'Partner'].map(role => (
                <motion.label
                  key={role}
                  variants={checkboxVariants}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-[#F47B20] rounded border-gray-300 focus:ring-[#F47B20]"
                    checked={selectedRoles.includes(role)}
                    onChange={() => handleCheckboxChange(role)}
                  />
                  <span className="ml-2 text-sm text-black">{role}</span>
                </motion.label>
              ))}
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(244, 123, 32, 0.6)" }}
            transition={{ duration: 0.3, ease: smoothEasing }}
            type="submit"
            className="w-full bg-[#F47B20] text-white font-bold py-3 px-6 rounded-md text-sm shadow-md hover:bg-[#E85A28] transition-colors"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

