import axios from "axios";
import React, { useState } from "react";


const AdminPage = () => {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setImages([...e.target.files]); 
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (images.length === 0) return;

    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`image_${index}`, image); 
    });

    console.log(formData); 
    try {
       await axios.post('http://localhost:3000/admin',formData)
    } catch (error) {
        console.log("error : ", error)
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <h1 className="text-bold text-3xl text-black">Upload Images to the Web</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-5 border-2 border-black p-10 rounded-lg">
        <input type="file" multiple onChange={handleChange} className="border border-black rounded-lg" />
        <button
          type="submit"
          className="bg-black rounded-lg text-white hover:text-black hover:bg-transparent border border-black p-2 w-3/12"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
