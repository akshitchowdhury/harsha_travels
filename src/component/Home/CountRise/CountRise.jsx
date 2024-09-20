import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCar, faUsers, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Add relevant icons

// Custom hook for Intersection Observer
const useIntersection = (callback, options) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

// Count up animation component
const CountUpAnimation = ({ initialValue, targetValue, text, icon }) => {
  const [count, setCount] = useState(initialValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000; // Animation duration in milliseconds

  // Start the animation
  const startAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);
  };

  const ref = useIntersection(() => {
    startAnimation();
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full"
    >
      <FontAwesomeIcon icon={icon} className="text-4xl mb-4 text-gray-700" />
      <span className="text-3xl md:text-4xl font-bold text-black">
        {count >= targetValue ? `${targetValue.toLocaleString()}` : count.toLocaleString()}
      </span>
      <span className="text-md md:text-lg text-gray-600 mt-2">{text}</span>
    </div>
  );
};

// Main count rise component
function CountRise() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-light text-center text-black mb-12">
        Delivering Value for Our Customers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CountUpAnimation
          initialValue={0}
          targetValue={12}
          text="Years Of Experience"
          icon={faTrophy}
        />
        <CountUpAnimation
          initialValue={0}
          targetValue={1500}
          text="Fleets"
          icon={faCar}
        />
        <CountUpAnimation
          initialValue={0}
          targetValue={1000}
          text="Users"
          icon={faUsers}
        />
        <CountUpAnimation
          initialValue={0}
          targetValue={700}
          text="Trips Everyday"
          icon={faMapMarkerAlt}
        />
      </div>
    </div>
  );
}

export default CountRise;
