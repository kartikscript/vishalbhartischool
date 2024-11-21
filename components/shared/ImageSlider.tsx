'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
      
    },3000)
  },[])
  return (
    <div className='relative w-[65%] aspect-video mx-auto '>
      <div className='relative size-full rounded-xl overflow-hidden shadow-xl'>
        <Image
          src={'/images/main-4.webp'}
          alt='scg'
          fill
        />
      </div>
      <div className='absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-primary to-transparent'/>
      <div className='absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-primary to-transparent'/>
      <ChevronLeft className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-14 p-1 bg-white/90 text-primary-600 rounded-full'/>
      <ChevronRight className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-14 p-1 bg-white/90 text-primary-600 rounded-full'/>
    </div>
  )
}

export default ImageSlider