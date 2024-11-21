'use client'

import React, { useEffect, useState } from 'react'
import NavItem from '../Navitem'
import { navLinks } from '@/constants/homeLinks'
import { Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [showGetStarted, setshowGetStarted] = useState(false);
  const pathname = usePathname()


  useEffect(() => {
    if(pathname==='/'){
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 1.5) {
          setIsScrolledPast(true);  
        } else {
          setIsScrolledPast(false);
        }
        if (window.scrollY > window.innerHeight * 2.5) {
          setshowGetStarted(true);  
        } else {
          setshowGetStarted(false);
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
    <header className={`z-50 py-10 px-16 ${isScrolledPast ||otherPage ?'bg-white text-gray-900':'bg-primary'} sticky top-0 font-medium flex items-center justify-between`}>
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
  )
}

export default Navbar