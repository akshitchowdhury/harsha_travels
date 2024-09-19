import React from 'react';
// import h1 from "../../assets/heroBg2.jpg";
import HomeHeroText from './HomeHeroText';
import './HomeHero.css'
const HomeHero = () => {
  return (
    <>  
     <div className="relative w-auto md:w-full h-[300px] md:h-[500px] lg:h-[500px] ">
 
        <div className="heroBg">
          {/* <img src={h1} alt="Slide 1" className="object-cover object-center w-full h-[300px] md:h-[700px] lg:h-[700px]" /> */}
          <div className=" opacity-0"></div>
        </div>
       
      
    </div>
    
    <HomeHeroText/>
    </>

  );
};

export default HomeHero;
