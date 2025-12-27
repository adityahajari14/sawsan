'use client';

import React, { useState } from 'react';

export default function GetInvolvedForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: 'Syria',
    email: '',
    phoneCode: '+963',
    phone: '',
    joinAs: [] as string[]
  });

  const handleCheckboxChange = (role: string) => {
    setFormData(prev => ({
      ...prev,
      joinAs: prev.joinAs.includes(role)
        ? prev.joinAs.filter(r => r !== role)
        : [...prev.joinAs, role]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="border-2 border-[#F47B20] rounded-2xl p-6 md:p-10 lg:p-12 bg-white shadow-md">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#F47B20] mb-6 lg:mb-10">
            Get Involved
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-xs text-black font-normal">
                Full Name
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-400 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-400 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20]"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-xs text-black font-normal">
                Location
              </label>
              <div className="relative">
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-400 rounded-md shadow-sm text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F47B20]"
                >
                  <option>Syria</option>
                  <option>Lebanon</option>
                  <option>Jordan</option>
                  <option>Turkey</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs text-black font-normal">
                E-mail Address
              </label>
              <input
                type="email"
                placeholder="E-mail Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-400 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20]"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-xs text-black font-normal">
                Phone number
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.phoneCode}
                  onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                  className="w-32 px-4 py-3 border border-gray-400 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20]"
                >
                  <option>+963</option>
                  <option>+961</option>
                  <option>+962</option>
                  <option>+90</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-4 py-3 border border-gray-400 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#F47B20]"
                />
              </div>
            </div>

            {/* Join As */}
            <div className="space-y-4">
              <label className="block text-xs text-black font-normal">
                Join as:
              </label>
              <div className="flex flex-wrap gap-6 lg:gap-8">
                {['Doctor', 'Donor', 'Volunteer', 'Partner'].map((role) => (
                  <label key={role} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.joinAs.includes(role)}
                      onChange={() => handleCheckboxChange(role)}
                      className="w-5 h-5 border-2 border-gray-400 rounded text-[#F47B20] focus:ring-2 focus:ring-[#F47B20]"
                    />
                    <span className="text-sm text-black">{role}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#F47B20] text-white font-bold px-6 py-3 rounded-md hover:bg-[#E85A28] transition-colors"
            >
              <span>Submit</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
