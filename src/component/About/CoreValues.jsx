import React from 'react';
import vision from '../../assets/vision.jpg'; // Ensure the image paths are correct
import mission from '../../assets/mission.webp'; // Ensure the image paths are correct
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      name: 'VISION',
      icon: faEye,
      imageSrc: vision,
      description:
        'At Harsha Travels, our vision is to revolutionize the transportation industry by embracing technology and innovation. We aim to create seamless and memorable travel experiences, providing reliable and safe services that enhance the lives of our customers.',
    },
    {
      id: 2,
      name: 'MISSION',
      icon: faRocket,
      imageSrc: mission,
      description:
        'Our mission is to cater to the evolving needs of our patrons by leveraging cutting-edge solutions. We strive to maintain the highest standards of safety, hygiene, and customer satisfaction, continually adapting to meet the challenges of a dynamic world.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const hoverTextVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-center text-2xl md:text-5xl font-light text-zinc-950 mb-6">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {values.map((value) => (
          <motion.div
            key={value.id}
            className="group relative bg-white rounded-lg shadow-md 
            overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-zinc-950
             hover:text-white text-gray-900"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-72 md:h-[400px] ">
              <img
                src={value.imageSrc}
                alt={value.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {/* <FontAwesomeIcon
                  icon={value.icon}
                  className="text-amber-500 text-4xl"
                /> */}
              </div>
              {/* Hover Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white opacity-0 group-hover:opacity-100"
                variants={hoverTextVariants}
                initial="hidden"
                animate="hidden"
                whileHover="visible"
              >
                <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
                <p className="text-sm">{value.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoreValues;
