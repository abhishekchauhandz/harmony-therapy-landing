import Image from 'next/image';
import React from 'react';
import blogimg from '../../public/altImage.png';

export default function BlogCard({ image, para, heading }) {
  return (
    <div className="blogCard bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl">
        <Image
          src={blogimg}  // {image ? image : blogimg}
          alt="Blog Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl"
        />
      </div>
      <div className="info mt-2 flex flex-col items-center text-center">
        <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold truncate w-full">
          {heading || 'Heading...'}
        </h1>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] mt-2">
          {para ? (para.length > 180 ? `${para.slice(0, 180)}...` : para) : 'No content available'}
        </p>
      </div>
    </div>
  );
}
