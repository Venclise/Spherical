import Orb from '@/components/Orb'
import Choose from '@/sections/Choose'
import Companies from '@/sections/Companies'
import Customer from '@/sections/Customer'
import FAQ from '@/sections/FAQ'
import GetStart from '@/sections/GetStart'
import Hero from '@/sections/Hero'
import Pricing from '@/sections/Pricing'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black'>
   <Hero />
   <Companies />
   <Choose />
   <Customer />
   <Pricing />
   <GetStart />
   <FAQ />
    </div>
  )
}
