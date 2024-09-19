import React from 'react';
import aboutImg from "../../assets/airportCab.jpg";


const AboutBody = () => {
  return (
    <div className="p-4 sm:p-6 md:p-0 ">
      <div className="border-2 border-white bg-black mx-auto px-4 py-6 sm:py-8 md:py-10">
        <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 mb-6 sm:mb-8 md:mb-12">
          <div className="flex-grow border-t border-white"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mx-2 sm:mx-4 text-amber-500 whitespace-nowrap">
            ABOUT <span className='text-white'>HARSHA TRAVELS</span>
          </h1>
          <div className="flex-grow border-t border-white"></div>
        </div>
        
        <section>
          <div className="max-w-7xl mx-auto p-4 text-base sm:text-lg md:text-xl font-normal -my-6 sm:-my-8 md:-my-12 flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start">
              <img
                src={aboutImg}
                alt="Excavation Work"
                className="rounded-none shadow-md w-full max-w-[500px] h-auto object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 md:pl-6">
  <p className="text-justify text-gray-50 leading-relaxed mb-4">
    Harsha Travels is a premier corporate cab service provider based in Bangalore, delivering reliable and professional transportation solutions across India. With over two decades of expertise, we specialize in offering safe, efficient, and seamless travel experiences tailored to meet the unique needs of businesses and their employees.
  </p>
  <p className="text-justify text-gray-50 leading-relaxed mb-4">
    Our dedicated team of experienced drivers and well-maintained fleet ensure punctuality, comfort, and safety, making us the preferred choice for corporate clients. We have successfully partnered with leading companies across various sectors, providing customized transportation solutions, including daily employee commutes, airport transfers, and event transportation.
  </p>
  <p className="text-justify text-gray-50 leading-relaxed mb-6">
    Established in 1994, Harsha Travels has built a reputation for excellence in corporate travel services, consistently delivering high-quality service with a focus on client satisfaction and strong business ethics.
  </p>
</div>

          </div>
          
          {/* Additional Content Section */}
          {/* <AboutWhatWeDo /> */}
        </section>
      </div>
    </div>
  );
};

export default AboutBody;