import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="bg-black">
      <div>
        <hr className=""/>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center mt-4 py-4">
        <div className="">
          <h1 className="text-bold text-white text-xl border border-dotted p-1">
            LensCraft
          </h1>
        </div>
        <div>
          <h1 className="text-white ">
            © 2024 LensCraft. All Rights Reserved.
          </h1>
        </div>
        <div className="text-white space-x-5">
          <a href="">
            <FacebookIcon />
          </a>
          <a href="">
            <InstagramIcon />
          </a>
          <a href="">
            <TelegramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
