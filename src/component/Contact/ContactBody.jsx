import { faGlobeAsia, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactBody = () => {
  return (
    <section className=" p-10 bg-black">
      <div className="container mx-auto">
        <div className="pb-16">
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-gray-100">CONTACT INFORMATION</h2>
            <div className='w-[200px] h-[2px] md:w-[500px] md:h-[1px] bg-gray-500'></div>
            <p className="text-gray-100 mt-4 ">
            Partner with Harsha Travels for dependable, safe, and top-notch corporate cab services.

            </p>
            <p className='text-gray-100 max-w-[700px]'>

            Get in touch with us today to discuss your corporate travel needs and experience seamless transportation solutions.
            </p>
          </div>
          {/* <img src={contact} className='h-[300px] my-6'/> */}
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex-1 lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-8">
                <div className="text-3xl text-gray-100 mr-4">
                  <FontAwesomeIcon className='text-amber-400' icon={faMapMarkerAlt} />
                </div>
                <div>
                  <p className="text-gray-100">#133, K.R. Hospital Road, Balaji Layout, Uttarahalli Main Road, Bangalore-560062</p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <div className="text-3xl text-gray-100 mr-4">
                  <FontAwesomeIcon className='text-amber-400' icon={faMobileAlt} />
                </div>
                <div>
                  <p className="text-gray-100"><a href="tel:+00124568365987" className="hover:underline">+91-9980464537 | +91-9738009835</a></p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl text-gray-100 mr-4">
                  <FontAwesomeIcon className='text-amber-400' icon={faGlobeAsia} />
                </div>
                <div>
                  <p className="text-gray-100"><a href="mailto:infor@example.com" className="hover:underline">harshatravels2016@gmail.com</a></p>
                  {/* <p className="text-gray-100"><a href="http://www.example.com" className="hover:underline" target="_blank" rel="noopener noreferrer">www.example.com</a></p> */}
                </div>
              </div>
            </div>
            <div className="flex-1 lg:w-1/2 md:-my-[300px] lg:-my-[160px]">
              <h2 className="text-2xl md:text-4xl font-light text-center mb-5 text-gray-100">SEND US A MESSAGE</h2>
              <div className='w-[200px] h-[2px] md:w-[500px] md:h-[1px] bg-gray-500 mx-12 my-4'></div>
              <div className="max-w-xl mx-4 md:mx-auto md:h-[570px]">
                <form id="contact-form" action="https://whizthemes.com/nazmul/php/mail.php" method="post">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal  text-gray-100">YOUR NAME*</label>
                      <input type="text" name="name" className="border border-white p-2 w-[270px] h-[70px] rounded-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-100">YOUR EMAIL*</label>
                      <input type="email" name="email" className="border border-white p-2
                      w-[270px] h-[70px]  rounded-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-100">SUBJECT*</label>
                      <input type="text" name="subject" className="border border-white p-2 w-[270px] h-[70px] rounded-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-100">PHONE*</label>
                      <input type="number" name="subject" className="border border-white p-2 w-[270px] h-[70px] rounded-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-normal text-gray-100">MESSAGE*</label>
                      <textarea name="message" className="border border-white p-2
                      w-[270px] h-[170px] md:w-[570px] md:h-[70px] rounded-none" rows="6"></textarea>
                    </div>
                    
                  </div>
                  
                <div className="text-center my-2">
                      <button type="submit" className="border border-white text-white 
                      py-2 px-4 
                     my-4 w-[270px] h-[70px] rounded-none hover:bg-white hover:text-black
                      transition ease-in-out duration-300">SEND NOW</button>
                    </div>
                </form>
                {/* <div className="form-output mt-4 text-center">
                  <p className="form-message"></p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ContactBody;
