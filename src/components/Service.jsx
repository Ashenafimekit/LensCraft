import React from "react";

const Service = () => {
  return (
    <div className="bg-black p-10">
      <div className="">
        <h1 className="text-4xl text-white text-bold text-center mb-10">
          Our Service
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 px-20 gap-5">
        <div className="flex flex-col gap-3 items-center justify-center border-2 border-customBorder p-3">
          <div className="flex flex-row gap-1">
            <h1 className="text-xl text-bold text-center text-white bg-customBorder p-1 ">
              01
            </h1>
            <h1 className="text-xl text-bold  text-white">
              Wedding Photography
            </h1>
          </div>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            inventore?
          </p>
          <button className="bg-customBorder border-2 border-customBorder px-5 py-1 text-white hover:bg-transparent">
            view
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center border-2 border-customBorder p-3">
          <div className="flex flex-row gap-1">
            <h1 className="text-xl text-bold text-center text-white bg-customBorder p-1">
              02
            </h1>
            <h1 className="text-xl text-bold text-center text-white">
              Portrait Photography
            </h1>
          </div>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            inventore?
          </p>
          <button className="bg-customBorder border-2 border-customBorder px-5 py-1 text-white hover:bg-transparent">
            view
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center border-2 border-customBorder p-3">
          <div className="flex flex-row gap-1">
            <h1 className="text-xl text-bold text-center text-white bg-customBorder p-1">
              03
            </h1>
            <h1 className="text-xl text-bold text-center text-white">
              Fasion Photography
            </h1>
          </div>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            inventore?
          </p>
          <button className="bg-customBorder border-2 border-customBorder px-5 py-1 text-white hover:bg-transparent">
            view
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center border-2 border-customBorder p-3">
          <div className="flex flex-row gap-1">
            <h1 className="text-xl text-bold text-center text-white bg-customBorder p-1">
              04
            </h1>
            <h1 className="text-xl text-bold text-center text-white">
              Indore Photography
            </h1>
          </div>
          <p className="text-sm text-white ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            inventore?
          </p>
          <button className="bg-customBorder border-2 border-customBorder px-5 py-1 text-white hover:bg-transparent">
            view
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
