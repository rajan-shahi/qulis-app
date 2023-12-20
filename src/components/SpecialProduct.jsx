import React from "react";
import p11 from "../assets/gov.jpg";
const SpecialProduct = () => {
  return (
    <div name="organic" className=" flex md:px-0 px-4   items-center justify-center bg-[#06142E]  md:py-28 py-10">
      <div className=" flex  flex-col gap-10 justify-center  w-full md:w-9/12">
        <div className=" flex flex-col gap-3 items-center justify-center text-gray-100 font-bold">
          <h1 className=" md:text-3xl font-bold">
            FRESH ORGANIC FOODS DELIVERY MADE EASY
          </h1>
          <h2 className=" md:text-2xl">SPECIAL PRODUCT</h2>
        </div>
        <div className=" md:relative grid md:grid-cols-2 md:py-10  gap-10">
          <div className=" flex  md:flex-1 flex-col gap-2 px-5 py-5   md:pr-40 bg-[#473E66] rounded-xl text-gray-200">
            <h1 className=" text-2xl">FRESH FROM OUR FARM</h1>
            <h2 className=" text-gray-300 text-md">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy habitant morbi
            </h2>
          </div>
          <div className=" flex  md:flex-1 flex-col gap-2 px-4 py-5  md:pl-40  bg-green-600 rounded-xl text-gray-200">
            <h1 className=" text-2xl">GOOD FOR HEALTH</h1>
            <h2 className=" text-gray-300 text-md">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy habitant morbi
            </h2>
          </div>
          <div className=" flex  md:flex-1 flex-col gap-2 px-4 py-5  md:pr-40  bg-red-500  rounded-3xl  text-gray-200">
            <h1 className=" md:text-2xl">100% ORGANIC FOODS</h1>
            <h2 className=" text-gray-300 text-md">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy habitant morbi
            </h2>
          </div>
          <div className=" flex  md:flex-1 flex-col gap-2 px-4 py-5   md:pl-40  bg-sky-600 rounded-xl text-gray-200">
            <h1 className=" text-2xl">SAFE FROM PESTICIDES</h1>
            <h2 className=" text-gray-300 text-md">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy habitant morbi
            </h2>
          </div>
        </div>
        <div className="  flex justify-center z-20  md:absolute md:pt-28  md:pl-96">
          <div className=" flex   cursor-pointer flex-col items-center  py-12 px-4 rounded-full md:w-[350px] w-[300px] bg-white justify-center">
            <img
              className=" object-cover  flex justify-center items-center h-40 md:h-56"
              src={p11}
              alt=""
            />
            <h1 className="  text-xl cursor-pointer hover:text-green-500  duration-500">
              Organic Strawberry
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
