"use client";

import Image from 'next/image';
import Link from 'next/link';
import logoWhite from '@/images/logo-white.png';
import whatsapp from '@/images/whatsapp.svg';
import facebook from '@/images/facebook.svg';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#377DFF] text-white font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Logo and Tagline */}
          <div className="text-center mb-10 md:mb-18">
            <div className="flex justify-center mb-15">
              <Image
                src={logoWhite}
                alt="VR PUMPS"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="text-sm md:text-base max-w-5xl mx-auto leading-relaxed">
              VR PUMPS Is A Specialized Manufacturer Of Different Varieties Of Pumps, Integrating Research & Development,
              Engineering & Advanced Robotic Manufacturing To Maintain Stringent Quality Control.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-12 md:mb-16">
            {/* Address */}
            <div className="text-center sm:text-left border border-[#E6E9EB4D] px-16 py-10 flex items-center sm:justify-start justify-center">
              <p className="text-sm md:text-base leading-relaxed">
                No. 26, Mahalakshmi Gardens,<br />
                Thottipalayam Road,<br />
                Chinniyampalayam,<br />
                Coimbatore - 641 062. Tamilnadu,<br />
                INDIA.
              </p>
            </div>

            {/* Email */}
            <div className="text-center border border-[#E6E9EB4D] px-16 py-10 flex items-center lg:justify-center sm:justify-start justify-center">
              <Link 
                href="mailto:Vrpumps@Yahoo.in" 
                className="text-sm md:text-base hover:underline transition-all duration-200 cursor-pointer"
              >
                vrpumps@Yahoo.in
              </Link>
            </div>

            {/* Phone Numbers */}
            <div className="text-center border border-[#E6E9EB4D] md:text-right px-16 py-10 flex items-center lg:justify-center sm:justify-start justify-center">
              <div>
                <Link 
                  href="tel:+919715177222" 
                  className="block text-sm md:text-base hover:underline transition-all duration-200 cursor-pointer mb-1"
                >
                  +91 97151 77222
                </Link>
                <Link 
                  href="tel:+919952537222" 
                  className="block text-sm md:text-base hover:underline transition-all duration-200 cursor-pointer"
                >
                  +91 99525 37222
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t border-[#E6E9EB4D] bg-[#377DFF] w-full">
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pb-10 pb-20 flex flex-col md:flex-row justify-between items-center">
          {/* Developed By */}
          <div className="text-sm mb-4 md:mb-0 font-semibold text-[#ffffff]">
            <span></span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <Link 
              href="#" 
              className="p-2 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="WhatsApp"
            >
              <Image
                src={whatsapp}
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
            <Link 
              href="#" 
              className="p-2 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Facebook"
            >
              <Image
                src={facebook}
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}