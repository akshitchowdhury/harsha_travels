import React from 'react'
import HomeHero from './hOMEhERO.JSX'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (
    <>
    <div className='flex flex-col gap-[200px]'>
    <div className='h-auto'
    >
   <HomeHero/>
    </div>

    <WhyChooseUs/>
    </div>
    </>
  )
}

export default Home
