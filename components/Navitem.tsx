import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type SubLinks = {
  linkTitle:string,
  linkHref:string
}[]
const NavItem = ({title,subLinks,styles,isScrolled,otherPage}:{title:string | React.ReactNode,subLinks:SubLinks ,styles?:string,isScrolled?:boolean,otherPage?:boolean}) => {
  return (
    <div className=' relative group'>
      <span className={`${!(typeof title ==='string') ? 'p-0 cursor-default':'p-4'} ${isScrolled || otherPage?'text-gray-900':'text-primary-100'}  peer w-full group-hover:bg-primary-300 group-hover:text-white rounded-full transition-all duration-200 delay-75 cursor-pointer`}>{title}</span>
      <div className={`hidden group-hover:block absolute ${styles||'left-0'} pt-4`}>
        <div className='bg-primary-300 shadow-lg w-72 text-white tracking-wider space-y-1 rounded-2xl px-4 py-2'>
          {
            subLinks.map((item,i)=>{
              return(
                <Link href={item.linkHref} key={i} className='p-3 text-sm cursor-pointer group/item rounded-md hover:bg-primary flex justify-between'>{item.linkTitle}  <ArrowRight className='opacity-0 group-hover/item:opacity-100'/> </Link>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default NavItem