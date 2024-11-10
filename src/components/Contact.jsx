import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearFormData = () => {
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Form Data : ", formData);
    clearFormData()
    try {
      await axios.post("http://localhost:3000", formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#232323]">
      <div className="mt-5">
        <h1 className="text-4xl text-white text-bold text-center">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row m-10 bg-white shadow-xl rounded-lg overflow-hidden w-4/5">
        <div className="w-full md:w-1/2 flex flex-col gap-6 p-8">
          <div>
            <h1 className="font-bold text-3xl">MTS MULTIMEDIA</h1>
            <p className="text-base mt-4 leading-relaxed">
              Get in Touch We’d love to hear from you! Whether you’re looking to
              book a session, have questions, or need more information, our team
              is here to help.
            </p>
          </div>
          <div>
            <ul className="list-disc font-semibold pl-5 space-y-2">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
              <li>Email: hello@photographyagency.com</li>
              <li>Location: LensCraft, Ras Hotel, Harar</li>
            </ul>
          </div>
          <div className="flex flex-row gap-5">
            <h1>follow us</h1>
            <div className=" space-x-5">
              <a href="">
                <FacebookIcon className="hover:text-[#d69e6d]" />
              </a>
              <a href="">
                <InstagramIcon className="hover:text-[#d69e6d]" />
              </a>
              <a href="">
                <TelegramIcon className="hover:text-[#d69e6d]" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center border border-black bg-black p-4">
          <h1 className="text-lg text-center text-white text-bold">
            Contact Form
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full sm:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className=" border border-b-black rounded-lg shadow-lg text-center p-3"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-b-black rounded-lg shadow-lg text-center p-3"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-b-black rounded-lg shadow-lg text-center p-3"
            ></textarea>
            <button
              type="submit"
              className="bg-[#d69e6d] rounded-lg text-white hover:bg-transparent border border-customBorder p-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
