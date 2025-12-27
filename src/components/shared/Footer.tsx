import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white pt-12 md:pt-16 lg:pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Top Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 mb-10 md:mb-12">
          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-gray-500 text-sm md:text-base font-medium">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  About
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  About
                </div>
              </Link>
              <Link href="/causes" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Causes
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Causes
                </div>
              </Link>
              <Link href="/donate" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Donate
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Donate
                </div>
              </Link>
              <Link href="/" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Home
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Home
                </div>
              </Link>
            </nav>
          </div>

          {/* Other Links */}
          <div className="space-y-3">
            <h3 className="text-gray-500 text-sm md:text-base font-medium">Other Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/blogs" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Blogs
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Blogs
                </div>
              </Link>
              <Link href="/privacy-policy" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Privacy Policy
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Privacy Policy
                </div>
              </Link>
              <Link href="/terms" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Terms and conditions
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Terms and conditions
                </div>
              </Link>
              <Link href="/program" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Program
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Program
                </div>
              </Link>
            </nav>
          </div>

          {/* Social Connect */}
          <div className="space-y-3">
            <h3 className="text-gray-500 text-sm md:text-base font-medium">Social Connect</h3>
            <nav className="flex flex-col gap-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Instagram
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Instagram
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  X/twitter
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  X/twitter
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Linkedln
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Linkedln
                </div>
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h3 className="text-gray-500 text-sm md:text-base font-medium">Contact us</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+910000000000" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  +91 0000000000
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  +91 0000000000
                </div>
              </a>
              <a href="mailto:contact@sawsanalakhrasfoundation.org" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors group inline-block relative overflow-hidden h-[24px]">
                <div className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  contact@sawsanalakhrasfoundation.org
                </div>
                <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  contact@sawsanalakhrasfoundation.org
                </div>
              </a>
              <p className="text-sm md:text-base text-black leading-relaxed">
                The Sawsan Alakhras Foundation<br />12 Peace Lane, Unit 04
              </p>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center">
          <div className="relative w-24 h-20 md:w-28 md:h-24">
            <Image 
              src="/logo.webp" 
              alt="Sawsan Foundation Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Orange Top Border */}
      <div className="absolute left-0 top-0 w-full h-1.5 bg-[#F47B20]">
      </div>
    </footer>
  );
}
