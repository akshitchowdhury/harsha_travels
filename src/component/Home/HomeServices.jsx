import React from 'react'
import { ArrowRight } from 'lucide-react'

// Assuming these imports are correct in your project structure
import g1 from "../../assets/airportCab2.jpg"
import g2 from "../../assets/corporateTours4.jpg"
import g3 from "../../assets/employee_service2.jpeg"
import g4 from "../../assets/outstationTravel.jpg"

const HomeServices = () => {
    const data = [
        {
            src: g1,
            title: "Airport Pickup",
            desc: "Harsha Travels Services offers reliable transport services in Bangalore, specializing in airport transfers, ensuring you never face any commuting difficulties."
        },
        {
            src: g2,
            title: "Employee Transportation",
            desc: "Harsha Travels Services is a leading name among corporate taxi hire agencies in Bangalore."
        },
        {
            src: g3,
            title: "Shuttle Services",
            desc: "Harsha Travels Services is dedicated to meeting the needs of our clients to the fullest. Our goal is to provide the best transportation services in Bangalore."
        },
        {
            src: g4,
            title: "Local/Outstation Services",
            desc: "Harsha Travels Services is committed to delivering excellence. We offer a tech-enabled fleet for both local and outstation rentals."
        },
    ]
    
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 group">
            <div className="relative overflow-hidden aspect-w-3 aspect-h-4">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 flex items-center gap-2">
                  Know More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <h2 className="text-xl text-orange-600 font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeServices