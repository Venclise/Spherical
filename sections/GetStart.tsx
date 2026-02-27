import BlurText from '@/components/BlurText'
import { Button } from '@/components/ui/button'
import AnimatedText from '@/lib/gsap'
import { ChevronRightCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function GetStart() {
  return (
    <div id="getstarted" className='w-full h-screen flex-col  flex items-center justify-center lg:p-10 p-5 '>
        <div className='bg-neutral-950 h-full mt-12 w-full p-10  gap-8 border overflow-hidden border-neutral-900 rounded-3xl flex items-center lg:flex-row flex-col justify-between'>
            <div className='flex flex-col items-start gap-5 w-max'>
                      <BlurText
  text="Get started."
  delay={10}
  animateBy="letters"
  direction="bottom"
  className="text-4xl lg:text-5xl text-red-500  font-semibold"
/>


                          <BlurText
  text="GExpertly crafted financial plans are essential for achieving financial success.."
  delay={10}
  animateBy="words"
  direction="bottom"
  className='text-sm font-medium text-neutral-300 max-w-xs'
  />

            
          
       <AnimatedText animate='leftToRight'>
     <Button className='bg-white rounded-full hover:bg-red-600 hover:text-white  text-xl transition-all cursor-pointer px-8 py-6 text-red-500 hover:gap-4'>Get started
      <span className='  mt-1  rounded-full '>
       <ChevronRightCircle />
      </span>
     </Button>
        </AnimatedText>   

            </div>

           <div className='relative w-[25rem] lg:w-[40rem] h-full '>
              
           
           <Image 
           src="/img-4.avif"
           alt="Smart Task Assignment"
           fill
           className="w-full h-full object-cover"
           />
         
           </div>
        </div>
    </div>
  )

}
