
import { Badge } from '@/components/ui/badge'
import AnimatedText from '@/lib/gsap'
import Image from 'next/image'
import React from 'react'

export default function Choose() {
  return (
    <div id="about" className='p-2 gap-8  h-max w-full flex flex-col items-center justify-center '>
      <span className=' text-red-500 font-semibold' > 
Choose us
</span>



<div className=' lg:p-5 flex lg:flex-row flex-col gap-4 lg:gap-2 w-full'>
    <AnimatedText animate='leftToRight'>

      <div className='bg-neutral-950 border overflow-hidden border-neutral-900 group  p-5 flex flex-row lg:flex-col gap-4 rounded-4xl  w-full lg:w-[20rem]  justify-center   h-[15rem] lg:h-screen'>
        <div className='flex flex-col gap-4'>

        <h1 className='font-semibold max-w-md text-red-600 leading-10  lg:text-4xl text-3xl'>
          Smart Task Assignment.
        </h1>
<p className='text-neutral-500 text-sm'>
Automatically assign tasks based on project needs and team strengths.
</p>
        </div>
<div className='relative w-[20rem] lg:flex-1 '>

<Image 
src="/img-1.avif"
alt="Smart Task Assignment"
fill
className="w-full h-full object-contain"
/>
</div>
      </div>
</AnimatedText>

   
      <div className='flex flex-col justify-around items-center gap-1'>
    <AnimatedText animate='leftToRight' delay={.3}>

         <div className=' p-5    flex items-center w-full   lg:w-[35rem]   justify-center h-[50vh] bg-neutral-950 border border-neutral-900 rounded-4xl '>
            <div className='flex flex-col gap-4'>

        <h1 className='font-semibold text-red-600  lg:text-4xl text-3xl max-w-md'>
      Track Progress Seamlessly
        </h1>
<p className='text-gray-500 text-sm max-w-xs'>
Monitor project updates and performance across teams in real time.
</p>
            </div>
<div className='relative w-[15rem] lg:w-[20rem] h-full'>

<Image 
src="/img-3.avif"
alt="Smart Task Assignment"
fill
className="w-full h-full object-contain"
/>
</div>
      </div>
      </AnimatedText>
           <div className=' w-full   lg:w-[35rem]    h-[50vh] '>

    <AnimatedText animate='leftToRight' delay={.4}>

        <div className=' p-5    flex items-center w-full   lg:w-[35rem]   justify-center h-[50vh] bg-neutral-950 border border-neutral-900 rounded-4xl '>
            <div className='flex flex-col gap-4'>

              <h1 className='font-semibold text-red-600  lg:text-4xl text-3xl max-w-md'>

Auto-Cleanup of Completed Tasks

        </h1>
<p className='text-gray-400 text-sm'>
Effortlessly remove outdated tasks to keep your workspace clutter-free.

</p>
            </div>
<div className='relative w-[20rem] h-full'>

<Image 
src="/img-4.avif"
alt="Smart Task Assignment"
fill
className="w-full h-full object-contain"
/>
</div>
      </div>
      </AnimatedText>
</div>
</div>
    <AnimatedText animate='leftToRight' delay={.5}>

     <div className='bg-neutral-950 border border-neutral-900 p-5 lg:p-5 flex  flex-row lg:flex-col gap-4 rounded-4xl w-full lg:w-[20rem]  h-[15rem]   justify-center  lg:h-screen'>
        <div className='flex flex-col gap-4'>
              <h1 className='font-semibold text-red-600 leading-10 lg:text-4xl text-3xl max-w-xs'>
     Customizable Task Prioritization
        </h1>
<p className='text-neutral-500 text-sm max-w-xs'>
Set task priorities to align with your goals and deadlines.</p>
</div>
<div className='relative w-[15rem]  lg:flex-1 '>
<Image 
src="/img-2.avif"
alt="Smart Task Assignment"
fill
className="w-full h-full object-contain"
/>
</div>
      </div>
      </AnimatedText>
</div>

    </div>
  )
}
