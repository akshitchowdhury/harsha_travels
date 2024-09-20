import React from 'react';
import about from '../../assets/about2.jpg';
import WhyChooseUs from './WhyChooseUs';

export default function HomeAbout() {
  return (
    <>
      <div className="p-8 md:p-28 shadow-lg">
        <div className="flex flex-col md:flex-row mt-20 md:mt-0 justify-center items-center bg-white">
          <div className="md:w-1/2 pr-8 transform transition-all duration-500  ">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Welcome To<br />
              <span className="font-medium text-orange-500">
                Harsha Travels Services
              </span>
            </h1>
            <p className="text-sm md:text-lg  text-gray-600 text-justify leading-loose mb-6">
            Harsha Travels Services provides top-notch transport solutions in Bangalore, specifically catering to the employee transportation needs of leading IT and BPO companies in the region. Backed by a decade of experience in corporate services, our dedicated and hardworking team is passionate about delivering exceptional service. Our fleet comprises compliant and technology-enabled vehicles sourced from the best vendors in the city. By combining industry-leading technology with integrated fleet services, we offer a seamless employee transport solution in Bangalore. With over 70 professionals committed to excellence, you can trust us to provide value beyond your expectations!
            </p>
            <button className="bg-orange-500 text-white px-6 py-4 rounded-ee-full rounded-ss-full font-semibold hover:bg-black transition duration-300">
              KNOW MORE →
            </button>
          </div>
          <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-20">
            <div className="relative transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl">
              <img
                src={about}
                alt="HARSHA MP"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white p-2 rounded transform transition-all duration-300 hover:translate-y-1 hover:scale-105">
                <h2 className="text-xl font-bold">HARSHA MP</h2>
                <p className="text-sm">Managing Director and CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </>
  );
}
