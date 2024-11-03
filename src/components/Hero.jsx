import React from "react";
import { Carousel } from "antd";
import { Link as ScrollLink } from "react-scroll";
import studio from "../assets/studio.jpg";
import camera from "../assets/camera.jpg";
import c1 from "../assets/c1.avif";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const heroText = {
    "/": " Welcome to LensCraft Studio",
    "/gallery": "Our Gallery",
    "/service": "Our Service ",
  };

  const currentHeroText =
    heroText[location.pathname] || "Welcome to LensCraft Studio";
  return (
    <div>
      <Carousel arrows infinite={false} autoplay autoplaySpeed={3000}>
        <div className="relative">
          <img
            src={c1}
            alt="Studio"
            className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] object-cover object-top"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 text-center px-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black">
                {currentHeroText}
              </h1>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl text-black">
                Capture the moment, cherish the memories
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-center">
              <ScrollLink to="about" smooth={true} duration={500}>
                <button className=" bg-black py-1 px-1 sm:py-2 sm:px-4 lg:py-3 lg:px-6 text-xs sm:text-base lg:text-lg text-white rounded-lg shadow-lg border border-black font-bold hover:bg-transparent hover:text-black transition duration-300">
                  About Us
                </button>
              </ScrollLink>

              <button className="hidden sm:block bg-black py-1 px-1 sm:py-2 sm:px-4 lg:py-3 lg:px-6 text-xs sm:text-base lg:text-lg text-white rounded-lg shadow-lg border border-black font-bold hover:bg-transparent hover:text-black transition duration-300">
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
