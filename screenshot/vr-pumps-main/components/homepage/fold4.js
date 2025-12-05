"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import fold4image1 from '@/images/homepage/fold4/fold4image1.png';
import fold4image2 from '@/images/homepage/fold4/fold4image2.png';

export default function Fold4() {
  // Timer state for countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 364,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown timer effect (optional - you can remove if not needed)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* 70% OFF Sale Banner */}
          <div className="relative bg-[#DCDADB] rounded-2xl overflow-hidden h-[520px] lg:h-[500px]">
            <div className="absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col">
              {/* Top Content */}
              <div>
                <p className="text-pink-500 text-sm font-medium mb-4">LIMITED TIME ONLY</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                  70% OFF
                </h2>
                
                {/* Countdown Timer */}
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mb-8 h-max">
                  <div className="bg-white rounded-lg px-4 py-2 text-center min-w-[80px]">
                    <p className="text-xl md:text-3xl font-bold text-gray-900">{timeLeft.days}</p>
                    <p className="text-sm text-gray-600">Days</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 text-center min-w-[80px]">
                    <p className="text-xl md:text-3xl font-bold text-gray-900">{timeLeft.hours}</p>
                    <p className="text-sm text-gray-600">Hours</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 text-center min-w-[80px]">
                    <p className="text-xl md:text-3xl font-bold text-gray-900">{timeLeft.minutes}</p>
                    <p className="text-sm text-gray-600">Mins</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 text-center min-w-[80px]">
                    <p className="text-xl md:text-3xl font-bold text-gray-900">{timeLeft.seconds}</p>
                    <p className="text-sm text-gray-600">Seconds</p>
                  </div>
                </div>
              </div>

              {/* Shop Button */}
              <div>
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors duration-200 cursor-pointer">
                  Shop
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div className="absolute bottom-5 sm:right-15 right-5 w-[60%] h-[60%]">
              <Image
                src={fold4image1}
                alt="Sale Product"
                className="w-full h-full object-contain object-bottom-right"
              />
            </div>
          </div>

          {/* Aquarise Product Banner */}
          <div className="relative bg-[#2A2A2A] rounded-2xl overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
            <div className="absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col">
              {/* Top Content */}
              <div className="pb-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  ₹7938
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Aquarise
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-xs">
                  Where Pressure Meets Precision
                </p>
              </div>

              {/* Shop Button */}
              <div>
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors duration-200 cursor-pointer">
                  Shop
                </button>
              </div>
            </div>

            {/* Product Image */}
            <div className="absolute bottom-5 sm:right-15 right-5 w-[55%] h-[55%]">
              <Image
                src={fold4image2}
                alt="Aquarise Product"
                className="w-full h-full object-contain object-bottom-right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}