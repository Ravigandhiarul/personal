"use client";

import favouriteFill from '@/images/homepage/favourite-fill.svg';
import favourite from '@/images/favourite.svg';
import Image from 'next/image';

export default function FavouriteButton({ isFavorite, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer border-[1px] border-solid border-[#21325B1A]"
    >
      <Image
        src={isFavorite ? favouriteFill : favourite}
        alt="favourite"
        width={16}
        height={16}
      />
    </div>
  );
}