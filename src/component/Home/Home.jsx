import React from 'react'

import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout'
import HomeOneClick from './HomeOnClick'
import HomeServices from './HomeServices'
import CountRise from './CountRise/CountRise'
import Client from './Client/Client'

const Home = () => {
  return (
    <>
    <div className=' '>
    <div className='h-auto'
    ><HomeHero/></div>
    <HomeAbout/>
    <HomeOneClick/>
    <CountRise/>
    <HomeServices/>
    <Client/>

    </div>
    </>
  )
}

export default Home
