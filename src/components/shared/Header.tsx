'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 py-3 md:py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.webp"
                        alt="Sawsan Logo"
                        width={200}
                        height={100}
                        className="h-14 md:h-16 lg:h-20 w-auto"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    <Link
                        href="/about"
                        className={`font-normal text-sm lg:text-base tracking-wide transition-colors ${
                            isActive('/about')
                                ? 'text-[#F47B20] font-bold'
                                : 'text-gray-600 hover:text-[#F47B20]'
                        }`}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/donation"
                        className={`font-normal text-sm lg:text-base tracking-wide transition-colors ${
                            isActive('/donation')
                                ? 'text-[#F47B20] font-bold'
                                : 'text-gray-600 hover:text-[#F47B20]'
                        }`}
                    >
                        Donation
                    </Link>
                    <Link
                        href="/our-model"
                        className={`font-normal text-sm lg:text-base tracking-wide transition-colors ${
                            isActive('/our-model')
                                ? 'text-[#F47B20] font-bold'
                                : 'text-gray-600 hover:text-[#F47B20]'
                        }`}
                    >
                        Our Model
                    </Link>
                    <Link
                        href="/impact"
                        className={`font-normal text-sm lg:text-base tracking-wide transition-colors ${
                            isActive('/impact')
                                ? 'text-[#F47B20] font-bold'
                                : 'text-gray-600 hover:text-[#F47B20]'
                        }`}
                    >
                        Impact
                    </Link>
                    <Link
                        href="/get-involved"
                        className={`font-normal text-sm lg:text-base tracking-wide transition-colors ${
                            isActive('/get-involved')
                                ? 'text-[#F47B20] font-bold'
                                : 'text-gray-600 hover:text-[#F47B20]'
                        }`}
                    >
                        Get Involved
                    </Link>
                </nav>

                {/* Contact Us Button */}
                <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 md:gap-3 bg-[#F47B20] rounded-full px-4 md:px-6 py-2 md:py-3 border-2 border-[#F47B20] hover:bg-white transition-all duration-300 group"
                >
                    <span className="text-white font-normal text-sm md:text-base leading-normal tracking-wide group-hover:text-[#F47B20] transition-colors duration-300">
                        Contact us
                    </span>
                    <div className="w-4 h-3.5 relative flex items-center justify-center">
                        <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 13.3333"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 6.66667C0 6.41413 0.105345 6.17193 0.292861 5.99335C0.480376 5.81478 0.734701 5.71446 0.999888 5.71446H12.5846L8.29107 1.62758C8.10332 1.44878 7.99784 1.20627 7.99784 0.953412C7.99784 0.700552 8.10332 0.458048 8.29107 0.279248C8.47883 0.100449 8.73347 0 8.99899 0C9.26452 0 9.51916 0.100449 9.70691 0.279248L15.7062 5.9925C15.7994 6.08096 15.8732 6.18603 15.9236 6.30172C15.9741 6.4174 16 6.54142 16 6.66667C16 6.79192 15.9741 6.91593 15.9236 7.03162C15.8732 7.1473 15.7994 7.25238 15.7062 7.34083L9.70691 13.0541C9.51916 13.2329 9.26452 13.3333 8.99899 13.3333C8.73347 13.3333 8.47883 13.2329 8.29107 13.0541C8.10332 12.8753 7.99784 12.6328 7.99784 12.3799C7.99784 12.1271 8.10332 11.8846 8.29107 11.7058L12.5846 7.61888H0.999888C0.734701 7.61888 0.480376 7.51856 0.292861 7.33998C0.105345 7.16141 0 6.91921 0 6.66667Z"
                                className="fill-white group-hover:fill-[#F47B20] transition-colors duration-300"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
        </header>
    );
}
