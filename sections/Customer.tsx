import CountUp from '@/components/CountUp'



export default function Customer() {
  return (
    <div className='flex flex-wrap  lg:flex-row justify-center  lg:justify-around w-full h-max gap-12 mt-8 lg:h-max p-5 lg:p-15'>
      <h1 className=' flex'>
<span className='flex items-center gap-2'>
<CountUp
  from={0}
  to={200}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-white text-6xl lg:text-7xl font-bold"

/>
  <span className='text-white font-bold text-7xl'>+</span>


  </span>
<span className='text-gray-400 text-md mt-8  '>Active Users</span>
  </h1>
      <h1 className=' flex'>
<span className='flex items-center gap-2'>


<CountUp
  from={0}
  to={150}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-white text-6xl lg:text-7xl font-bold"

/>
  <span className='text-white font-bold text-7xl'>+</span>

  </span>
<span className='text-gray-400 text-md mt-8  '>Subscriptions Bought</span>

  </h1>
<div className=' flex items-center'>

  <span className='flex items-center gap-2'>


  <CountUp
  from={0}
  to={200}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-white text-6xl lg:text-7xl font-bold"
/>
  <span className='text-white font-bold text-7xl'>+</span>
  </span>
  
<span className='text-gray-400 text-md mt-8  '>Trusted by companies</span>
  </div>  
    </div>
  )
}
