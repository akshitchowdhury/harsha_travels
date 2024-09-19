import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTaxi, FaPlane, FaBus, FaTrain, FaHotel, FaCarSide, FaUserTie, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Card = ({ icon: Icon, title, description, color }) => (
  <motion.div
    className={`bg-white p-6 rounded-none shadow-lg
     hover:bg-black hover:text-white transition-all
     md:h-[300px] duration-300 ease-in-out`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${color} text-white`}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon size={40} />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-center">{description}</p>
    <button className='border-2 border-red-500 hover:bg-red-600  font-bold py-2 px-4 rounded-none mt-10'>Get a Qoute</button>
  </motion.div>
);

const WhyChooseUs = () => {
  const [showMore, setShowMore] = useState(false);

  const services = [
    { icon: FaTaxi, title: 'Mobility Solutions', description: 'One-stop solution for all your business transportation needs in Bangalore.', color: 'bg-yellow-500' },
    { icon: FaUserTie, title: 'Employee Transportation', description: 'Stress-free commute focusing on safety and improved productivity.', color: 'bg-blue-500' },
    { icon: FaChartLine, title: 'Transparent Operations', description: 'Consistent and financially predictable operations for smooth business.', color: 'bg-green-500' },
    { icon: FaPlane, title: 'Airport Transfers', description: 'Reliable and comfortable airport pickup and drop-off services.', color: 'bg-purple-500' },
    { icon: FaBus, title: 'Corporate Shuttles', description: 'Efficient group transportation for corporate events and daily commutes.', color: 'bg-red-500' },
    { icon: FaTrain, title: 'Railway Station Pickups', description: 'Punctual pickups from railway stations for your employees and clients.', color: 'bg-indigo-500' },
    { icon: FaHotel, title: 'Hotel Bookings', description: 'Seamless hotel reservations for your corporate travel needs.', color: 'bg-pink-500' },
    { icon: FaCarSide, title: 'Long-term Car Rentals', description: 'Flexible long-term car rental solutions for your business.', color: 'bg-orange-500' },
    { icon: FaShieldAlt, title: 'Travel Insurance', description: 'Comprehensive travel insurance for worry-free corporate trips.', color: 'bg-teal-500' },
  ];

  const visibleServices = showMore ? services : services.slice(0, 3);

  return (
    <div className="bg-gray-100 flex justify-center items-center -mx-3 p-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold text-center my-12 text-gray-900 sm:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-center text-xl text-gray-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transportation Solutions for You Anytime, Anywhere! Rent a Cab or Bus with Us!
        </motion.p>
        <motion.div
          className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {visibleServices.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </motion.div>
        <div className="mt-6 text-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
