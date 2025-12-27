"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  location: string;
  email: string;
  phoneCode: string;
  phone: string;
  joinAs: string[];
}

export default function GetInvolvedForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    location: "Syria",
    email: "",
    phoneCode: "+963",
    phone: "",
    joinAs: [],
  });

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      joinAs: prev.joinAs.includes(value)
        ? prev.joinAs.filter((item) => item !== value)
        : [...prev.joinAs, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-[#F47B20] rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg"
        >
          {/* Form Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#F47B20] mb-6 md:mb-10">
            Get Involved
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-xs font-medium text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="bg-white border border-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F47B20]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="bg-white border border-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F47B20] w-full mt-7"
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-black">Location</label>
              <div className="relative">
                <select
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="bg-white border border-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F47B20] w-full appearance-none"
                >
                  <option value="Syria">Syria</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6L8 10L12 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-black">
                E-mail Address
              </label>
              <input
                type="email"
                placeholder="E-mail Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-white border border-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F47B20]"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-black">
                Phone number
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.phoneCode}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneCode: e.target.value })
                  }
                  className="bg-white border border-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F47B20] w-32"
                >
                  <option value="+963">+963</option>
                  <option value="+966">+966</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white border border-gray-400 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#F47B20] flex-1"
                />
              </div>
            </div>

            {/* Join As */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-medium text-black">Join as:</label>
              <div className="flex flex-wrap gap-6">
                {["Doctor", "Donor", "Volunteer", "Partner"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.joinAs.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="w-5 h-5 border-2 border-gray-400 rounded focus:ring-[#F47B20] text-[#F47B20]"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#F47B20] text-white font-bold py-3 px-6 rounded-md flex items-center gap-2 self-start hover:bg-[#E85A28] transition-colors"
            >
              <span>Submit</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
