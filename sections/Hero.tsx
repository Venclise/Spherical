import Grainient from '@/components/Grainient'

import { Badge } from "@/components/ui/badge"
import SplitText from "@/components/SplitText";
import { Button } from '@/components/ui/button';
import { ChevronRightCircle, ExternalLink, LinkIcon } from 'lucide-react';
import BlurText from '@/components/BlurText';
import Image from 'next/image';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

export default function Hero() {
  return (
    <div className='w-full h-[170vh] lg:h-[250vh] relative bg-black flex flex-col items-center justify-center '>
   <div className='w-full flex items-center h-full justify-center p-5 lg:p-20'>

<div style={{ width: '100%', height: '90%', overflow: "hidden" }} className='rounded-full '>
  <Grainient
    color1="#f1f1f1"
    color2="#FF2056"
    color3="#FB2C36"
    timeSpeed={0.70}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={3}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.50}
    rotationAmount={500}
    noiseScale={1.7}
    grainAmount={0}
    grainScale={0}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={1}
    />
    <div className='w-full h-full  backdrop-filter backdrop-blur-3xl   absolute top-0 left-0 '/>
</div>
    </div>


<div className='absolute top-40 w-full flex items-center justify-center flex-col gap-8 '>
    <span className=' text-red-500 font-semibold' > 
Enchance Your Experience
</span>




<BlurText
  text="Unleash the Power of"
  delay={10}
  animateBy="letters"
  direction="bottom"
  className="text-5xl lg:text-7xl font-bold  text-white text-center"
/>

<BlurText
  text="AI"
  delay={100}
  animateBy="letters"
  direction="bottom"    
  className="text-7xl lg:text-9xl font-bold  text-white text-center"
/>

<div className='w-full h-max lg:h-[140vh]  '>
<ContainerScroll titleComponent="" >
<div className='w-full h-[50vh] lg:h-full    relative rounded-2xl '>
<Image

alt="Image"
fill
src="/ai.avif" 
className='w-full h-full  object-contain lg:object-cover rounded-2xl '
/>
</div>
</ContainerScroll>
</div>

<div className='mt-4'>
     <Button className='bg-white rounded-full hover:bg-red-600 hover:text-white  text-xl transition-all cursor-pointer  py-6 text-red-500 hover:gap-4'>Sign in
      <span className='  mt-1  rounded-full '>
       <ChevronRightCircle />
      </span>
     </Button>
</div>
</div>
    </div>
  )
}
