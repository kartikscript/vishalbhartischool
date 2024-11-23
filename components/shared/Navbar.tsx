'use client'

import React, { useEffect, useState } from 'react'
import NavItem from '../Navitem'
import { navLinks } from '@/constants/homeLinks'
import { MenuSquare, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()


  useEffect(() => {
    if(pathname==='/'){
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 1.5) {
          setIsScrolledPast(true);  
        } else {
          setIsScrolledPast(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
      };
    }
  }, []);

  const otherPage = pathname !== '/'
  if(pathname === '/start')return null
  return (
    <>
      <header className={`z-50 py-8 px-16 ${isScrolledPast ||otherPage ?'bg-white text-gray-900':'bg-primary-500'} sticky top-0 font-medium hidden md:flex items-center justify-between`}>
        <div className='text-2xl font-serif font-bold tracking-wider'>
          Vishal Bharti School
        </div>
          <div className='flex gap-6'>
            {
              navLinks.map(({title,subLinks},i)=>{
                return(
                    <NavItem key={i} title={title} subLinks={subLinks} isScrolled={isScrolledPast} otherPage={otherPage}/>
                )
              })
            }
          </div>
          <Link className='flex gap-2 items-center shadow-md bg-primary-400 text-primary-100 hover:text-white hover:bg-primary-500 hover:shadow-2xl hover:scale-95 transition-all duration-200 delay-75 py-2 px-4 rounded-3xl' href={''}><Phone className='size-4'/> Contact Us</Link>
      </header>
      <header className={`z-50 py-6 px-10 ${isScrolledPast ||otherPage ?'bg-white text-gray-900':'bg-primary-500'} sticky top-0 font-medium md:hidden flex items-center justify-between`}>
        <div className='text-lg font-serif font-bold tracking-wider'>
          Vishal Bharti School
        </div>
        <MenuSquare onClick={()=>setIsModalOpen(true)} />
        {isModalOpen && <div onClick={()=>setIsModalOpen(false)} className={`fixed bg-black/40 bottom-0 left-0 size-full z-40 `}/>}
        <div className={`fixed overflow-scroll  bg-slate-200 shadow-2xl bottom-0 left-0 w-full ${isModalOpen ?'h-[70%]':'h-0'} z-50 transition-all duration-500 rounded-t-[70px]`}>
           <div className='sticky top-0 left-1/2 flex justify-center items-center mb-10'>
             <button onClick={()=>setIsModalOpen(false)} className=' bg-black/80 size-14 rounded-full mt-3 p-1 text-lg text-slate-50'>X</button>
            </div>
          {
            navLinks.map(({title,subLinks},i)=>{
              return(
                  <NavItem key={i} title={title} subLinks={subLinks} isScrolled={isScrolledPast} otherPage={otherPage}/>
              )
            })
          }
        </div>
          {/* <div className='flex gap-6'>
            {
              navLinks.map(({title,subLinks},i)=>{
                return(
                    <NavItem key={i} title={title} subLinks={subLinks} isScrolled={isScrolledPast} otherPage={otherPage}/>
                )
              })
            }
          </div>
          <Link className='flex gap-2 items-center shadow-md bg-primary-400 text-primary-100 hover:text-white hover:bg-primary-500 hover:shadow-2xl hover:scale-95 transition-all duration-200 delay-75 py-2 px-4 rounded-3xl' href={''}><Phone className='size-4'/> Contact Us</Link> */}
      </header>
    </>
  )
}

export default Navbar