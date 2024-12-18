import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import pic1 from "../assets/mts/all/pic1.jpg"
import pic2 from "../assets/mts/all/pic2.jpg"
import pic3 from "../assets/mts/all/pic3.jpg"
import pic4 from "../assets/mts/all/pic4.jpg"
import pic5 from "../assets/mts/all/pic5.jpg"
import pic6 from "../assets/mts/all/pic6.jpg"
import pic7 from "../assets/mts/all/pic7.webp"
import pic8 from "../assets/mts/all/pic8.jpg"

const Gallery = () => {
  const [imageData, setImageData] = useState([
    {src : pic1, like: 0},
    {src : pic2, like: 0},
    {src : pic3, like: 0},
    {src : pic4, like: 0},
    {src : pic5, like: 0},
    {src : pic6, like: 0},
    {src : pic7, like: 0},
    {src : pic8, like: 0},
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
};

export default Gallery;
