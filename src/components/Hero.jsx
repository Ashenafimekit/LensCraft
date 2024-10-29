import React from "react";
import { Carousel } from "antd";
import studio from "../assets/studio.jpg";
import camera from "../assets/camera.jpg";



const Hero = () => {
  return (
    <div>
<Carousel arrows infinite={false} autoplay autoplaySpeed={3000}>
        <div className="relative">
          <img
            src={studio}
            alt="Studio"
            className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] object-cover object-center" 
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 text-center px-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-blue-400">
                Welcome to LensCraft Studio
              </h1>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl text-blue-400">
                Capture the moment, cherish the memories
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-center">
              <button className=" bg-blue-400 py-1 px-1 sm:py-2 sm:px-4 lg:py-3 lg:px-6 text-xs sm:text-base lg:text-lg text-white rounded-lg shadow-lg border border-black font-bold hover:bg-transparent hover:text-blue-400 transition duration-300">
                About Us
              </button>
              <button className="hidden sm:block bg-blue-400 py-1 px-1 sm:py-2 sm:px-4 lg:py-3 lg:px-6 text-xs sm:text-base lg:text-lg text-white rounded-lg shadow-lg border border-black font-bold hover:bg-transparent hover:text-blue-400 transition duration-300">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
