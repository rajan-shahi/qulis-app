import React from "react";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineCall } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import pay1 from "../assets/payment-1.webp";
import pay2 from "../assets/payment-2.webp";
import pay3 from "../assets/payment-3.webp";
import pay4 from "../assets/payment-4.webp";

const Footer = () => {
  return (
    <div>
      <div className=" flex justify-center bg-black">
        <div className=" flex justify-center items-center md:py-20  py-14">
          <div className=" flex  justify-center  items-center flex-col gap-4">
            <h1 className=" flex items-center md:text-2xl   text-lg text-gray-100">
              NEWSLETTER
            </h1>
            <h2 className="  md:text-4xl text-3xl text-green-500">
              GET DISCOUNT 30% OFF
            </h2>
            <div className=" grid md:grid-cols-2 md:gap-2 gap-6">
              <input name="email"
                className=" py-4 px-6 rounded-full  bg-gray-100 w-[350px] md:w-[400px] outline-none"
                type="Email"
                placeholder="Your email address"
              />
              <span className=" md:w-[250px] flex  justify-center items-center bg-orange-400 px-10 py-4  gap-2 rounded-full text-xl text-gray-100 hover:bg-green-400 duration-500">
                <span>
                  <MdEmail size={20} />
                </span>
                <button>SUBSCRIBE</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4  grid grid-cols-2 md:grid-cols-4   md:gap-0 gap-12 justify-center md:px-40  bg-gray-800 py-10">
        <div className=" flex-1 text-gray-400  font-bold text-sm flex flex-col gap-5">
          <h1 className=" md:text-xl text-green-500 font-bold">
            SHOPPING GUIDE
          </h1>
          <h2>Blog</h2>
          <h3>Payment</h3>
          <h4>Shipment</h4>
          <h2>Where is my order?</h2>
          <h2>Return Policy</h2>
        </div>
        <div className=" md:flex-1 text-gray-400  font-bold text-sm flex flex-col gap-5">
          <h1 className=" md:text-xl text-green-500 font-bold">
            STYLE ADVISOR
          </h1>
          <h2>Your Account</h2>
          <h2>Information</h2>
          <h2>Addresses</h2>
          <h2>Discount</h2>
          <h2>Contact Us</h2>
        </div>
        <div className=" md:flex-1 text-gray-400  font-bold text-sm flex flex-col gap-5">
          <h1 className=" md:text-xl text-green-500 font-bold">INFORMATION</h1>
          <h2>Site Map</h2>
          <h2>Search Terms</h2>
          <h2>Advanced Search</h2>
          <h2>About Us</h2>
          <h2>Contact Us</h2>
        </div>
        <div className="  flex flex-col gap-5 flex-1">
          <h1 className=" md:text-xl text-green-500 font-bold">CONTACT US</h1>
          <div className=" flex md:gap-5 gap-1 items-center">
            <span className="  text-gray-300 border-dotted border-2 rounded-full border-gray-400 p-3">
              <ImLocation2 size={20} />
            </span>
            <h1 className=" text-gray-400  text-sm"> Kathmandu,Nepal</h1>
          </div>
          <div className=" flex md:gap-5 gap-2 items-center">
            <span className="  text-gray-300 border-dotted border-2 rounded-full border-gray-400 p-3">
              <MdOutlineCall size={20} />
            </span>
            <h1 className=" text-gray-400">9866448106</h1>
          </div>
          <div className=" flex md:gap-5  gap-2 items-center">
            <span className="  text-gray-300 border-dotted border-2 rounded-full border-gray-400 p-3">
              <AiFillLinkedin size={20} />
            </span>
            <h1 className=" text-gray-400 text-sm">rajan-shahi</h1>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div  name="contact"  className="  grid md:grid-cols-3  md:gap-0 gap-5   border-t  justify-center md:justify-start border-gray-500  md:px-40  px-4 py-10 text-gray-500 bg-gray-700">
        <div className=" flex  md:gap-4  gap-10 md:flex-1">
          <span className=" cursor-pointer hover:text-white hover:font-bold duration-500">
            <BiLogoFacebook size={30} />
          </span>
          <span className=" cursor-pointer hover:text-white hover:font-bold duration-500 ">
            <AiFillLinkedin size={30} />
          </span>
          <span className=" cursor-pointer hover:text-white  hover:font-bold duration-500">
            <AiOutlineTwitter size={30} />
          </span>
          <span className=" cursor-pointer hover:text-white  hover:font-bold duration-500">
            <FaWifi size={30} />
          </span>
          <span className=" cursor-pointer hover:text-green-500  hover:font-bold duration-500">
            <FcGoogle size={30} />
          </span>
        </div>
        <div className=" cursor-pointer hover:text-green-500  text-gray-400 duration-500  flex-1">
          <h1>© 2023 Received. All Rights By Rajan Shahi.</h1>
        </div>
        <div className=" md:flex  hidden md:gap-4 gap-7  md:flex-1">
          <img src={pay1} alt="" />
          <img src={pay2} alt="" />
          <img src={pay3} alt="" />
          <img src={pay4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
