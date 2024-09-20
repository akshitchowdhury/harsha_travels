import React from 'react';

import l1 from "../../../assets/client/abb-removebg-preview.png";
import l2 from "../../../assets/client/bbmp-removebg-preview.png";
import l3 from "../../../assets/client/embassy-removebg-preview.png";
import l4 from "../../../assets/client/larsenTurbo-removebg-preview.png";
import l5 from "../../../assets/client/ncc-removebg-preview.png";
import l6 from "../../../assets/client/qualcom-removebg-preview.png";

import l7 from "../../../assets/client/Simplex-Infrastructures-Ltd-removebg-preview.png";
import l8 from "../../../assets/client/adarsh-removebg-preview.png";
import l9 from "../../../assets/client/divyashree-removebg-preview.png";
import l10 from "../../../assets/client/itd-removebg-preview.png";
import l11 from "../../../assets/client/mfar-removebg-preview.png";
import l12 from "../../../assets/client/navayuga-removebg-preview.png";
import l13 from "../../../assets/client/punjLyoyd-removebg-preview.png";
import l14 from "../../../assets/client/totalEnvt-removebg-preview.png";


const Client = () => {
  // Array of image URLs (replace with your actual image paths)
  const images = [
    l1, l2, l3, l4, l5, l6, l7, l8,l9,l10,l11,l12,l13,l14  ];

  return (
    <>
    <div className="px-6 py-10 md:px-12 lg:px-24">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-grow border-t w-[70px] border-black"></div>
        <h1 className="text-4xl md:text-4xl font-medium text-center mx-4 text-black">
          OUR MAJOR CLIENTS
        </h1>
        <div className="flex-grow border-t w-[70px] border-black"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="p-4 bg-white  hover:shadow-xl transition-shadow rounded-none"
          >
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="w-full h-40 object-contain rounded"
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Client;
