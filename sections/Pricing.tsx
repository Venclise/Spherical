import BlurText from '@/components/BlurText'
import { Button } from '@/components/ui/button'
import { Plans } from '@/lib/constants'
import AnimatedText from '@/lib/gsap'
import { AlertCircle, CheckCircle, CheckCircle2, ChevronRightCircle } from 'lucide-react'
import { div, h1, span } from 'motion/react-client'
import React from 'react'




export default function Pricing() {
  return (
    <div id="pricing" className='flex items-center justify-center flex-col w-full h-max mt-12 gap-8 '>
        <div className='flex flex-col items-center gap-4'>
      <span className='text-red-500 text-sm tracking-wider '>Pricing</span>
      
      <BlurText
  text="Affordable Pricing Plans."
  delay={10}
  animateBy="letters"
  direction="bottom"
  className="text-4xl lg:text-6xl text-white  font-semibold"
/>
        </div>

        <div className='flex items-center justify-center lg:flex-row flex-col w-full gap-8  p-5 lg:p-10 '>

        {
            Plans.map((item) => {
                return (
<AnimatedText animate='topToBottom' delay={item.id * .1}>
                    <div className={`bg-neutral-950 h-max flex flex-col  gap-6 border border-neutral-900 flex-1 p-7 rounded-2xl ${item.plan === "Advanced Plan" ? " bg-linear-to-b from-orange-500 to-red-700" : "bg-neutral-950"}`}>
                    <h1 className=' capitalize font-semibold text-xl text-white '>
                        {item.plan}
                      </h1>
                      <p className='text-gray-200 text-md'>
                      {item?.desc}
                      </p>
                      {
item?.price && (
    <div className='flex items-center gap-2'>
    <p className='text-white font-bold text-4xl'>${item?.price}</p>
    <span className={` text-lg ${item.plan === "Advanced Plan" ? "text-gray-200" : "text-gray-400"}`}>/month</span>
    </div>
)
}
<Button className='w-full py-6 textx-md cursor-pointer hover:gap-6 bg-white text-red-500 hover:bg-red-600 hover:text-white rounded-full'>
    Get Started <ChevronRightCircle />
</Button>


<p className='flex items-center justify-center gap-2 text-gray-100 text-md text-center'>
<AlertCircle  className='w-4 h-4'/>
Get your free 7-day trial today!</p>
<h2 className={`text-white border-t ${item.plan === "Advanced Plan" ? "border-neutral-400" : "border-neutral-900"} py-2`}>See What's included</h2>
<div className='flex flex-col gap-2'>

{item.included.map((included) => (
    
    <span className='flex items-center text-white gap-2'>
        <CheckCircle2  className='text-green-500'/>
<span className='text-md text-gray-200'>
        {included}
</span>
        </span>
))}
</div>
<div className='flex flex-col gap-2 '>

{item?.notIncluded?.map((included) => (
    
    <span className='flex items-center text-white gap-2'>
        <CheckCircle2  className='text-gray-500'/>
<span className='text-md text-gray-500'>
        {included}
</span>
        </span>
))}
</div>
                      </div>
</AnimatedText>
                )
            })
        }

        </div>
    </div>
  )
}
