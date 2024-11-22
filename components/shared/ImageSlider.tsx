'use client'
import { sliderImages } from '@/constants/homeLinks'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning,setIsTransitioning] = useState(false)

  const initSlider = ()=>{
    const interval = setInterval(() => {
      setIsTransitioning(true)
  
      setTimeout(()=>{
        setCurrentIndex((prev) =>{
          return prev ===sliderImages.length ? 1 :prev+1
        });
        setIsTransitioning(false)
      },1000)
  
    }, 5000);
    return () => clearInterval(interval);
    
  }
  
  useEffect(() => {
    initSlider()
  }, []);
  

  const currentImage = sliderImages.find((item)=>item.id===currentIndex)
  console.log(currentIndex)

  return (
    <div className='relative w-[65%] aspect-video mx-auto '>
      <div className='relative size-full rounded-3xl overflow-hidden shadow-2xl bg-gray-950 '>

        <Image 
          className={`transition-all duration-1000 ${isTransitioning ?'opacity-0':'opacity-100'}`}
          src={currentImage?.src || '/images/main-1.webp'}
          alt={currentImage?.alt || 'image'}
          fill
        />
      </div>
      {/* <div className='absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-primary to-transparent'/>
      <div className='absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-primary to-transparent'/> */}
      <ChevronLeft onClick={()=>setCurrentIndex(prev=>prev===0?sliderImages.length:prev-1)} className='shadow-lg cursor-pointer hover:bg-slate-300 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-14 p-1 bg-slate-100 transition-all text-primary-600 rounded-full'/>
      <ChevronRight onClick={()=>setCurrentIndex(prev=>prev===sliderImages.length?0:prev+1)} className='shadow-lg cursor-pointer hover:bg-slate-300 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-14 p-1 bg-slate-100 transition-all text-primary-600 rounded-full'/>
    </div>
  )
}

export default ImageSlider