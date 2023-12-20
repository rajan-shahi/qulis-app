import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { RiHandbagFill } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";
import { PiDeviceMobileSpeakerFill } from "react-icons/pi";

const Download = () => {
  return (
    <div className=" bg-gray-100 flex md:py-14 justify-center">
      <div className=" md:flex   w-full md:w-9/12">
        <div className=" flex  justify-center items-center flex-col gap-1 bg-white py-8 px-10 border-r  border-gray-200">
          <span className=" border-dotted border-2  border-green-500 p-4 rounded-full text-green-500 font-bold ">
            <FaTruckMoving size={30} />
          </span>
          <h1 className=" pt-6 text-xs text-gray-700 font-bold">
            FREE SHIPPING ON
          </h1>
          <h2 className=" text-gray-700 font-bold text-xs">ORDER OVER $99</h2>
        </div>
        <div className=" flex  justify-center items-center flex-col gap-1 bg-white py-8 px-14 border-r  border-gray-200">
          <span className=" border-dotted border-2  border-green-500 p-4 rounded-full text-green-500 font-bold ">
            <MdCall size={30} />
          </span>
          <h1 className=" pt-6 text-xs text-gray-700 font-bold">
          HAVE A QUESTIONS?
          </h1>
          <h2 className=" text-gray-700 font-bold text-xs">9866448106</h2>
        </div>
        <div className=" flex  justify-center items-center flex-col gap-1 bg-white py-8 px-14 border-r  border-gray-200">
          <span className=" border-dotted border-2  border-green-500 p-4 rounded-full text-green-500 font-bold ">
            <PiCurrencyDollarBold size={30} />
          </span>
          <h1 className=" pt-6 text-xs text-gray-700 font-bold">
          100% MONEY BACK
          </h1>
          <h2 className=" text-gray-700 font-bold text-xs">GUARANTEE</h2>
        </div>
        <div className=" flex  justify-center items-center flex-col gap-1 bg-white py-8 px-14 border-r  border-gray-200">
          <span className=" border-dotted border-2  border-green-500 p-4 rounded-full text-green-500 font-bold ">
            <RiHandbagFill size={30} />
          </span>
          <h1 className=" pt-6 text-xs text-gray-700 font-bold">
          30 DAYS RETURN
          </h1>
          <h2 className=" text-gray-700 font-bold text-xs">SERVICE</h2>
        </div>
        <div className="  flex justify-center items-center flex-col md:gap-4 gap-6 bg-green-400 md:py-0 py-10  px-6 border-r  border-gray-200" >
          <div className="  w-full flex gap-3 px-8 md:py-3 py-4 bg-gray-100 rounded-full items-center  cursor-pointer justify-center">
            <span className=" text-green-500"><AiFillApple size={30}/></span>
            <h1 className=" font-bold text-green-500">Doenload</h1>
          </div>
          <div  className="  w-full flex gap-3 px-8 md:py-3 py-4 bg-gray-100  rounded-full items-center cursor-pointer justify-center">
            <span className=" text-green-500"><PiDeviceMobileSpeakerFill size={30}/></span>
            <h1 className=" font-bold text-green-500">Download</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
