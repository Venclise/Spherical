import { Links } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    let date = new Date().getFullYear()
  return (
    <div id="faqs" className='bg-black lg:p-10 p-5 flex  flex-col gap-8  w-full items-center justify-between'> 
    <div className='flex items-center lg:flex-row flex-col lg:justify-between w-full gap-8'>

    <div className='flex flex-col gap-4'>
      <Link href="/" className='w-max font-semibold text-2xl text-red-400'>
      Spherical
      </Link>
      <p className='text-gray-200 text-sm'>
      Copyright ©{date}.All rights reserved
      </p>
    </div>
    <div>
        <span className='text-red-400 text-center'>
        Quick Links.
        </span>
        <div className='flex w-full lg:flex-col flex-row '>

        
                {
                  Links.map(({id,link,title}) => (
                    
                    <Link href={link}  key={id} className=" lg:text-left text-center  transition-all text-white">
            
                <p className=" text-md   transition-all text-gray-300 hover:underline capitalize">{title}.</p>
          
               </Link>
        ))
      }
      </div>
      </div>
        
    </div>
    <p className='text-gray-200'>
    Created by <Link className='text-blue-400 underline' href="https://weblify-nu.vercel.app/">Weblify.</Link>
    </p>
    </div>
  )
}
