'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const smoothEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: smoothEasing
    }
  }
};

export default function ImpactGetInvolvedForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: 'Syria',
    email: '',
    phone: '',
    joinAs: [] as string[]
  });

  const handleCheckbox = (value: string) => {
    setFormData(prev => ({
      ...prev,
      joinAs: prev.joinAs.includes(value)
        ? prev.joinAs.filter(v => v !== value)
        : [...prev.joinAs, value]
    }));
  };

  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="border-2 border-[#F47B20] rounded-[15px] p-6 md:p-10 lg:p-12 bg-white shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#F47B20] mb-6 md:mb-8">
            Get Involved
          </h2>

          <form className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-black mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-3 py-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20] focus:border-transparent text-sm"
                />
              </div>
              <div className="pt-0 md:pt-7">
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3 py-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20] focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs text-black mb-2 font-medium">
                Location
              </label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20] focus:border-transparent text-sm"
              >
                <option>Syria</option>
                <option>Saudi Arabia</option>
                <option>Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-black mb-2 font-medium">
                E-mail Address
              </label>
              <input
                type="email"
                placeholder="E-mail Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20] focus:border-transparent text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs text-black mb-2 font-medium">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20] focus:border-transparent text-sm"
              />
            </div>

            {/* Join As */}
            <div>
              <label className="block text-xs text-black mb-3 font-medium">
                Join as:
              </label>
              <div className="flex flex-wrap gap-5">
                {['Doctor', 'Donor', 'Volunteer', 'Partner'].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.joinAs.includes(option)}
                      onChange={() => handleCheckbox(option)}
                      className="w-5 h-5 border-2 border-gray-400 rounded focus:ring-2 focus:ring-[#F47B20] text-[#F47B20]"
                    />
                    <span className="text-sm text-black">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(244, 123, 32, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F47B20] text-white font-bold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#E86B10] transition-colors text-sm"
            >
              Submit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

