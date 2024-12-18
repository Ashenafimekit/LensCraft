import React from "react";
import wedd1 from "../assets/mts/wedding/wedding1.jpg"
import wedd2 from "../assets/mts/wedding/wedding2.jpg"
import wedd3 from "../assets/mts/wedding/wedding3.jpg"
import fash1 from "../assets/mts/fashion/fashion1.jpg"
import fash2 from "../assets/mts/fashion/fashion2.jpg"
import fash3 from "../assets/mts/fashion/fashion3.jpg"
import port1 from "../assets/mts/portrait/pt4.jpg"
import port2 from "../assets/mts/portrait/pt1.jpg"
import port3 from "../assets/mts/portrait/pt2.jpg"
import pic1 from "../assets/mts/all/pic1.jpg"
import pic2 from "../assets/mts/all/pic2.jpg"
import pic3 from "../assets/mts/all/pic3.jpg"


const Service_page = () => {
  return (
    <div className="flex flex-col gap-5">
      {/** Service Section 01 **/}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center border-2 border-customBorder rounded-lg mx-5 lg:mx-10 bg-black">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:p-10">
          <div className="flex flex-col gap-3 border border-customBorder p-3">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-xl font-bold text-center text-white bg-customBorder p-1">01</h1>
              <h1 className="text-xl font-bold text-white">Wedding Photography</h1>
            </div>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur id aut illo. Quae, facilis. Labore quam voluptatum fugit aliquid?
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Package one - price $100</li>
              <li>Package two - price $150</li>
              <li>Package three - price $200</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-row  rounded-lg p-5 md:p-0">
          <img src={wedd1} alt="Portrait" className="w-1/3 object-cover rounded-l-lg" />
          <img src={wedd2} alt="Portrait" className="w-1/3 object-cover " />
          <img src={wedd3} alt="Portrait" className="w-1/3 object-cover rounded-r-lg" />
        </div>
      </div>
      {/** Service Section 02 **/}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center border-2 border-customBorder rounded-lg mx-5 lg:mx-10 bg-black">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:p-10">
          <div className="flex flex-col gap-3 border border-customBorder p-3">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-xl font-bold text-center text-white bg-customBorder p-1">02</h1>
              <h1 className="text-xl font-bold text-white">Portrait Photography</h1>
            </div>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur id aut illo. Quae, facilis. Labore quam voluptatum fugit aliquid?
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Package one - price $100</li>
              <li>Package two - price $150</li>
              <li>Package three - price $200</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-row rounded-lg p-5 md:p-0">
          <img src={port1} alt="Portrait" className="w-1/3 object-cover rounded-l-lg" />
          <img src={port2} alt="Portrait" className="w-1/3 object-cover " />
          <img src={port3} alt="Portrait" className="w-1/3 object-cover rounded-r-lg" />
        </div>
      </div>

      {/** Service Section 03 **/}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center border-2 border-customBorder rounded-lg mx-5 lg:mx-10 bg-black">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:p-10">
          <div className="flex flex-col gap-3 border border-customBorder p-3">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-xl font-bold text-center text-white bg-customBorder p-1">03</h1>
              <h1 className="text-xl font-bold text-white">Fashion Photography</h1>
            </div>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur id aut illo. Quae, facilis. Labore quam voluptatum fugit aliquid?
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Package one - price $100</li>
              <li>Package two - price $150</li>
              <li>Package three - price $200</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-row rounded-lg p-5 md:p-0">
          <img src={fash1} alt="Fashion" className="w-1/3 object-cover rounded-l-lg" />
          <img src={fash2} alt="Fashion" className="w-1/3 object-cover " />
          <img src={fash3} alt="Fashion" className="w-1/3 object-cover rounded-r-lg" />
        </div>
      </div>

      {/** Service Section 04 **/}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center border-2 border-customBorder rounded-lg mx-5 lg:mx-10 bg-black">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5 md:p-10">
          <div className="flex flex-col gap-3 border border-customBorder p-3">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-xl font-bold text-center text-white bg-customBorder p-1">04</h1>
              <h1 className="text-xl font-bold text-white">Indoor Photography</h1>
            </div>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur id aut illo. Quae, facilis. Labore quam voluptatum fugit aliquid?
            </p>
            <ul className="list-disc pl-5 text-white">
              <li>Package one - price $100</li>
              <li>Package two - price $150</li>
              <li>Package three - price $200</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-row rounded-lg p-5 md:p-0">
          <img src={pic1} alt="Indoor" className="w-1/3 object-cover rounded-l-lg" />
          <img src={pic2} alt="Indoor" className="w-1/3 object-cover" />
          <img src={pic3} alt="Indoor" className="w-1/3 object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  );
};

export default Service_page;
