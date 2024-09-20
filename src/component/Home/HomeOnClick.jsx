import React, { useEffect, useRef, useState } from 'react';
import driver from "../../assets/Driver.jpg"

export default function HomeOneClick() {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-20 bg-white">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                    <span className='font-medium'>Harsha Travels</span><br />One Click Away
                </h2>
                <p className="text-lg leading-relaxed text-gray-500 mb-6 max-w-xl">
                    Happy employees are key to boosting your organization's productivity! To achieve their satisfaction, it’s essential to make their daily commute convenient and punctual. Harsha Travels Services ensures that your employees reach the office safely, on time, and efficiently, providing cost-effective transport solutions in Bangalore. We deliver high-quality cab services for your office needs at affordable rates.
                </p>
                <button className="bg-orange-500 text-white px-12 py-4 rounded-ee-full rounded-ss-full font-semibold hover:bg-orange-600 transition duration-300">
                    REQUEST FOR A QUOTE →
                </button>
            </div>
            <div
                ref={imgRef}
                className={`md:w-1/2 relative transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                    }`}
            >
                <img
                    src={driver}
                    alt="Taxi and businessman illustration"
                    className="object-contain w-full h-auto"
                />
            </div>
        </div>
    );
}