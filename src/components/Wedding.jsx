import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import wedd1 from "../assets/mts/wedding/wedding1.jpg"
import wedd2 from "../assets/mts/wedding/wedding2.jpg"
import wedd3 from "../assets/mts/wedding/wedding3.jpg"
import wedd4 from "../assets/mts/wedding/wedding4.jpg"
import wedd5 from "../assets/mts/wedding/wedding5.jpg"
import wedd6 from "../assets/mts/wedding/wedding6.jpg"
import wedd7 from "../assets/mts/wedding/wedding7.jpg"
import wedd8 from "../assets/mts/wedding/wedding8.jpg"
import wedd9 from "../assets/mts/wedding/wedding9.jpg"
import wedd10 from "../assets/mts/wedding/wedding10.jpg"
import wedd11 from "../assets/mts/wedding/wedding11.jpg"


const Wedding = () => {
  const [imageData, setImageData] = useState([
    {src : wedd1, like: 0},
    {src : wedd2, like: 0},
    {src : wedd3, like: 0},
    {src : wedd4, like: 0},
    {src : wedd5, like: 0},
    {src : wedd6, like: 0},
    {src : wedd7, like: 0},
    {src : wedd8, like: 0},
    {src : wedd9, like: 0},
    {src : wedd10, like: 0},
    {src : wedd11, like: 0},
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

export default Wedding