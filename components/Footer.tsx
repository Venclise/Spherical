import { Links } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    let date = new Date().getFullYear()
  return (
    <div id="faqs" className='bg-black lg:p-10 p-5 flex lg:flex-row flex-col gap-4 w-full items-center justify-between'> 
    <div className='flex flex-col gap-4'>
      <Link href="/" className='w-max font-semibold text-2xl text-red-400'>
      Spherical
      </Link>
      <p className='text-gray-200 text-sm'>
      Copyright ©{date}.All rights reserved
      </p>
    </div>
    <div>
        <span className='text-red-400'>
        Quick Links.
        </span>
        
                {
        Links.map(({id,link,title}) => (
            
            <Link href={link}  key={id} className="w-full    transition-all text-white">
            
                <p className=" text-lg transition-all text-gray-300 hover:underline capitalize">{title}.</p>
          
               </Link>
        ))
      }
        
    </div>
    </div>
  )
}
