import Image from 'next/image'
import React from 'react'
import blogimg from '../../public/altImage.png'

export default function BlogCard({ image, para, heading }) {
  return (
    <div className='blogCard'>
      <div className='image-container relative w-full h-[200px] border-[0.5px] border-[rgba(11,11,11,0.3)] rounded-[10px]'>
        <Image
          src={image ? image : blogimg}
          alt="Blog Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-[10px]"
        />
      </div>
      <div
        className="info mt-2 flex flex-col items-center"
      >
        <h1 className="text-[22px]">
          {heading ? heading : 'Heading...'}
        </h1>
        <p className="text-center mt-2">
          {para ? (para.length > 180 ? `${para.slice(0, 180)}...` : para) : "No content available"}
        </p>
      </div>
    </div>
  )
}