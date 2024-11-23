'use client'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

type SubLinks = {
  linkTitle:string,
  linkHref:string
}[]
const NavItem = ({title,subLinks,styles,isScrolled,otherPage}:{title:string | React.ReactNode,subLinks:SubLinks ,styles?:string,isScrolled?:boolean,otherPage?:boolean}) => {
    const [openNav, setOpenNav] = useState(false)
  
  return (
    <>
    <div className='hidden md:relative group'>
      <span className={`${!(typeof title ==='string') ? 'p-0 cursor-default':'p-4'} ${isScrolled || otherPage?'text-gray-900':'text-primary-100'}  peer w-full group-hover:bg-primary group-hover:text-white rounded-full transition-all duration-200 delay-75 cursor-pointer`}>{title}</span>
      <div className={`hidden group-hover:block absolute ${styles||'left-0'} pt-4`}>
        <div className='bg-primary shadow-lg w-72 text-white tracking-wider space-y-1 rounded-2xl px-4 py-2'>
          {
            subLinks.map((item,i)=>{
              return(
                <Link href={item.linkHref} key={i} className='p-3 text-sm cursor-pointer group/item rounded-md hover:bg-primary-500 flex justify-between'>{item.linkTitle}  <ArrowRight className='opacity-0 group-hover/item:opacity-100'/> </Link>
              )
            })
          }

        </div>
      </div>
    </div>

    <div onClick={()=>setOpenNav(prev=>!prev)} className='md:hidden  my-2 mx-8 px-2 py-5 text-primary-500 border-b-2 border-slate-300'>
      <div className='flex justify-between'>
        <h1 className=' text-xl font-semibold'>{title}</h1>
        <ChevronDown className={`${openNav && 'rotate-180'} transition-all duration-150`}/>

      </div>
      {
        openNav && (
          <div className='flex flex-col gap-2 py-3 px-3'>
             { subLinks.map((item,i)=>{
                return(
                  <Link href={item.linkHref} key={i} className='px-4 py-2 font-medium text-lg text-primary-400 bg-primary-100/40 rounded-xl '>{item.linkTitle} </Link>
                )
              })}
          </div>
        )
      }
    </div>
    </>
  )
}

export default NavItem