import React from 'react';
import message from "../../assets/happy_service2.webp"
export default function AboutMessage() {
  return (
    <div className="flex flex-col md:flex-row items-center
    
     justify-evenly  p-6 md:p-10 rounded-lg  max-w-7xl ">
      {/* Text Content */}
      <div className="md:w-1/2 p-4 space-y-4 text-gray-800">
        <h2 className="text-4xl md:text-6xl font-light text-black ">
          Welcome to Harsha Travels
        </h2>
        <p className="text-lg leading-loose text-justify">
          The transportation industry is experiencing a dynamic transformation
          driven by diverse customer needs and rapid technological advancements.
          Digitalization is fast-tracking the development of innovative
          solutions, creating new and memorable brand experiences for our
          customers. Harsha Travels plays a pivotal role in this evolution,
          providing seamless transportation services to numerous companies and
          generating employment opportunities in the process. Since our
          inception, we have consistently adapted to the ever-changing world,
          meeting its challenges head-on.
        </p>
        <p className="text-lg leading-loose text-justify">
          Our unwavering commitment is to meet every need of our valued clients,
          leveraging technology to open new doors and deliver seamless, safe
          travel experiences. We take pride in maintaining one of the finest
          teams in the industry, with safety and hygiene as our core values. At
          Harsha Travels, we strive to uphold these standards and appreciate our
          customers' trust in us. As the market evolves, we remain dedicated to
          meeting and exceeding the needs and expectations of our patrons.
        </p>
        <p className="text-lg font-semibold">Thank you,</p>
        <p className="text-lg font-semibold">MD, Harsha Travels</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 p-4">
        <img
          src={message} // Replace with the actual path to your image
          alt="Harsha Travels"
          className="rounded-lg shadow-md w-full object-cover h-72 md:h-[600px] lg:h-[400px]"
        />
      </div>
    </div>
  );
}
