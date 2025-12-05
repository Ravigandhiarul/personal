"use client";

import Image from 'next/image';
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import fold3image1 from '@/images/homepage/fold3/fold3image1.png';
import fold3image2 from '@/images/homepage/fold3/fold3image2.png';
import fold3image3 from '@/images/homepage/fold3/fold3image3.png';

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="#377DFF"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function Fold3() {
  const categories = [
    {
      id: 1,
      name: 'Zenflow',
      image: fold3image1,
      startingPrice: '₹5,366',
      link: '/products/zenflow'
    },
    {
      id: 2,
      name: 'Wellrise',
      image: fold3image2,
      startingPrice: '₹8,453',
      link: '/products/wellrise'
    },
    {
      id: 3,
      name: 'Cutmaxx',
      image: fold3image3,
      startingPrice: '₹19,845',
      link: '/products/cutmaxx'
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            The better way to shop with
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            VR PUMPS
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer border-[1px] border-solid border-[#21325B1A]"
            >
              {/* Product Images */}
              <div className="relative border-b-[1px] border-b-solid border-b-[#21325B1A] flex items-center justify-center">
                <Image
                  src={category.image}
                  alt={`${category.name} products`}
                  width={300}
                  height={280}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="px-6 py-10 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Starting from <span className="font-medium text-gray-900">{category.startingPrice}</span>
                </p>
                <div className="flex justify-center">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-[#377DFF] dark:text-white flex items-center space-x-2 cursor-pointer"
                  >
                    <AceternityLogo />
                    <span>View all</span>
                  </HoverBorderGradient>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}