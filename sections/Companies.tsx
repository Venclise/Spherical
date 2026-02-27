import LogoLoop from '@/components/LogoLoop';
import { logos } from '@/lib/constants';




export default function Companies() {








  return (
    <div className='lg:h-[50vh] h-max flex items-center justify-center flex-col  p-5 mt-12 gap-10'>
        <h1 className='text-gray-300 font-semibold text-2xl'>Already chosen by these Brands.</h1>
  <div style={{ height: '300px', position: 'relative', overflow: 'hidden'}} className='w-full '>
     
       <LogoLoop
        logos={logos}
        speed={100}
        direction="right"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#00000"
        ariaLabel="Technology partners"
        
      /> 

    
  
    </div>
    </div>
  )
}
