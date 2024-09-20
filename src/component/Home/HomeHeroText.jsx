import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeroText = () => {
  return (
    <div className="container absolute -my-[50%] md:-my-[0%] md:absolute md:top-0 lg:absolute lg:right-96 lg:top-[300px]">
      <div className="text-left px-4 md:mx-[35%] w-auto md:w-[700px]">
        <h1 className="text-xl md:text-5xl lg:text-4xl text-white font-semibold mb-2">
          Best <span className="animate-colorChange">Corporate Cab Services in BANGALORE</span>
        </h1>
        <p className="text-sm md:text-base lg:text-2xl my-4 text-white">
          Making <span className="text-black font-bold">Corporate TRAVELS</span> easy and hassle-free.
        </p>
        <Link to="/contact">
          <button
            className="w-44 h-12 max-w-xs px-4 py-2 bg-gray-50 text-zinc-950 font-bold
                       shadow-md hover:bg-black hover:text-white
                       focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50
                       transition duration-300 ease-in-out rounded-ee-full rounded-ss-full"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroText;

