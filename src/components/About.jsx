import React from "react";
import camera from "../assets/camera.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#232323]">
      <div className="mt-5">
        <h1 className="text-4xl text-white text-bold text-center">About Us</h1>
      </div>
      <div className="flex flex-col md:flex-row m-10 bg-white shadow-xl rounded-lg overflow-hidden w-4/5">
        <div className="w-full md:w-1/2 flex flex-col gap-6 p-8">
          <div>
            <h1 className="font-bold text-3xl">Every Digital Studio</h1>
            <p className="text-base mt-4 leading-relaxed">
              At Every Digital Studio, we’re dedicated to creating a
              platform where memories are captured and cherished. Our goal is to
              connect clients with skilled photographers who bring stories to
              life through exceptional imagery, making the journey from concept
              to final photo as seamless and fulfilling as possible.
            </p>
          </div>
          <div>
            <ul className="list-disc font-semibold pl-5 space-y-2">
              <li>Artistic Excellence</li>
              <li>Customer Focus</li>
              <li>Innovative Approach</li>
              <li>Professional Reliability</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={camera}
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
