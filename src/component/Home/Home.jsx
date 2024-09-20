import React from 'react'

import WhyChooseUs from './WhyChooseUs'
import HomeHero from './HomeHero'

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
