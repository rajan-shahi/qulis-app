import React from "react";
import b1 from "../assets/banner-img1.webp";
import b2 from "../assets/banner-img2 (1).webp";
import anjur from "../assets/angur.jpg";
import tam from "../assets/tamator.jpg";
import gopi from "../assets/gopi.jpg";
import chili from "../assets/chili.jpg";
import banana from "../assets/banana.jpg";
import apple from "../assets/apple.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const BestSellers = () => {
  return (
    <div className=" py-0 md:py-6  md:pb-14 pb-0 bg-gray-100 flex justify-center">
      <div className=" flex justify-center gap-14    flex-col  w-full md:w-9/12">
        <div className=" md:flex gap-3 md:px-0 px-4 ">
          <img className="  hover:animate-pulse w-full md:w-[50%]" src={b1} alt="" />
          <img className=" hover:animate-pulse w-full  md:pt-0 pt-5 md:w-[50%]" src={b2} alt="" />
        </div>
        {/* card */}
        <div className=" py-8 bg-white">
          <div className=" md:pb-0 pb-6 flex flex-col gap-3 items-center justify-center">
            <h1 className=" md:text-5xl text-3xl text-black font-bold">BEST SELLER</h1>
            <button className=" text-white  bg-green-500 py-2 px-5 rounded-md  md:text-sm text-xs font-bold">
              SO YOU GET TO KNOW ME BETTER
            </button>
          </div>
          <div className="  px-4 w-full grid md:grid-cols-3 grid-cols-1  gap-6 md:py-10 md:px-6">
            {sellers.map((seller, index) => (
              <div
                key={index}
                className="  group py-4  w-full flex flex-col  gap-5 justify-center items-center"
              >
                <div className=" border    py-12   px-10 md:px-14">
                  <img
                    className=" md:px-0 px-10    relative  cursor-pointer  hover:scale-150  duration-500 w-full    h-56"
                    src={seller.img}
                    alt=""
                  />
                </div>
                <span className="  z-50 absolute flex gap-4 opacity-0 group-hover:opacity-100  duration-1000">
                  <span className=" bg-white p-4 rounded-full text-black font-bold cursor-pointer hover:bg-black hover:text-white">
                    {seller.icon}
                  </span>
                  <span className=" bg-white p-4 rounded-full text-black font-bold cursor-pointer hover:bg-black hover:text-white">
                    {seller.heard}
                  </span>
                </span>
                <div className=" flex flex-col gap-2 ">
                  <h1 className=" md:text-lg text-md text-gray-700 font-bold hover:text-orange-500 cursor-pointer">
                    {seller.name}
                  </h1>
                  <h2 className="  flex items-center  justify-center md:text-lg text-md text-gray-700 ">
                    {seller.p}
                  </h2>
                  <div className=" flex justify-center text-sm items-center cursor-pointer  text-green-400">
                  <h1 >{seller.start}</h1>
                  <h1 >{seller.start}</h1>
                  <h1 >{seller.start}</h1>
                  <h1>{seller.start}</h1>
                  <h1 >{seller.start}</h1>
                  <h1>{seller.start}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;

const sellers = [
  {
    img: anjur,
    name: "Fresh Red Seedless",
    p: "$8.00",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
  },
  {
    img: tam,
    name: "Organic Sweet corn",
    p: "$7.99",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
   
  },
  {
    img: gopi,
    name: "Organic grape Tomatoes",
    p: "$5.00",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
  },
  
  {
    img: banana,
    name: "Organice Sweet Banana",
    p: "$8.0230",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
  },
  
  
  {
    img: apple,
    name: "Organic Sweet corn",
    p: "$19.00",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
  },
  {
    img: chili,
    name: "Organic Green Cabbage",
    p: "$15.00",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
  },
];
