"use client";

import Image from 'next/image';
import fold2image1 from '@/images/homepage/fold2/fold2image1.png';
import fold2image2 from '@/images/homepage/fold2/fold2image2.png';
import fold2image3 from '@/images/homepage/fold2/fold2image3.png';

export default function Fold2() {
  const features = [
    {
      id: 1,
      icon: fold2image1,
      title: 'Secure checkout',
      description: 'Guaranteed safe checkout'
    },
    {
      id: 2,
      icon: fold2image2,
      title: '30 Days return',
      description: 'We offer you a full refund within 30 days of purchase.'
    },
    {
      id: 3,
      icon: fold2image3,
      title: 'Free shipping',
      description: 'Automatically receive free standard shipping on every order.'
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 border-b-[1px] border-b-solid border-b-[#21325B1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 justify-between">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-[18px] font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-[14px] md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}