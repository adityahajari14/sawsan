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
              <Link href="/about" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                About
              </Link>
              <Link href="/causes" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Causes
              </Link>
              <Link href="/donate" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Donate
              </Link>
              <Link href="/" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Home
              </Link>
            </nav>
          </div>

          {/* Other Links */}
          <div className="space-y-3">
            <h3 className="text-gray-500 text-sm md:text-base font-medium">Other Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/blogs" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Blogs
              </Link>
              <Link href="/privacy-policy" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Terms and conditions
              </Link>
              <Link href="/program" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Program
              </Link>
            </nav>
          </div>

          {/* Social Connect */}
          <div className="space-y-3">
            <h3 className="text-gray-500 text-sm md:text-base font-medium">Social Connect</h3>
            <nav className="flex flex-col gap-2">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Instagram
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                X/twitter
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                Linkedln
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h3 className="text-gray-500 text-sm md:text-base font-medium">Contact us</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+910000000000" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                +91 0000000000
              </a>
              <a href="mailto:contact@sawsanalakhrasfoundation.org" className="font-medium text-sm md:text-base text-black hover:text-[#F47B20] transition-colors">
                contact@sawsanalakhrasfoundation.org
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
