import React from 'react'
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import fs1 from "../assets/mts/fashion/fashion1.jpg"
import fs2 from "../assets/mts/fashion/fashion2.jpg"
import fs3 from "../assets/mts/fashion/fashion3.jpg"
import fs4 from "../assets/mts/fashion/fashion4.jpg"
import fs5 from "../assets/mts/fashion/fashion5.jpg"
import fs6 from "../assets/mts/fashion/fashion6.jpg"
import fs7 from "../assets/mts/fashion/fashion7.jpg"



const Fashion = () => {
  const [imageData, setImageData] = useState([
    {src : fs1, like: 0},
    {src : fs2, like: 0},
    {src : fs3, like: 0},
    {src : fs4, like: 0},
    {src : fs5, like: 0},
    {src : fs6, like: 0},
    {src : fs7, like:0},
  ])
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);


  const handleClick = (index) => {
    const updatedData = [...imageData];
    updatedData[index].like += 1;
    setImageData(updatedData);
  };

  const openModal = (image) => {
    setCurrentImage(image.src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {imageData.map((image, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 relative group overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full sm:h-full mb-3 object-cover object-top rounded-lg transform transition duration-500 group-hover:scale-105"
              onClick={() => openModal(image)}
            />
            <button className="" onClick={() => handleClick(index)}>
              <span className="space-x-2 text-sm text-bold text-white ">
                <FavoriteBorderIcon />{image.like}
              </span>
            </button>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-xl py-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={currentImage} alt="" className="w-full h-auto max-h-screen py-10" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Fashion