import React from "react";
import anjur from "../assets/angur.jpg";
import tam from "../assets/tamator.jpg";
import gopi from "../assets/gopi.jpg";
import chili from "../assets/chili.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const OrderStep = () => {
  return (
    <div>
      <div name="stepfood" className=" flex   flex-col justify-center">
        <div className=" flex  items-center bg-[#1D1A39] justify-center py-16 md:py-20">
          <div className="  md:pt-12 md:py-0 py-6  md:px-0 px-4 flex flex-col  gap-3   items-center text-gray-100">
            <h1 className="   flex justify-center md:text-4xl text-xl font-bold">
              HURRY UP!
            </h1>
            <h2 className=" md:text-6xl   text-3xl font-bold">DEAL OF THE WEEK</h2>
            <h1 className=" flex justify-center md:text-xl  text-md font-bold">
              From our family farm right to your doorstep.
            </h1>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="   z-40  bg-[#1D1A39]  flex justify-center ">
        <div className=" flex justify-center  md:w-9/12">
          <div className="  w-full shadow-lg  md:shadow-slate-400   grid  md:grid-cols-4 grid-cols-1  md:gap-4 gap-12  bg-white py-10 md:border-t-8  border-t-8 border-t-green-400">
            {orders.map((order, index) => (
              <div
                key={index}
                className="   md:px-0 px-16 flex flex-col  gap-3 items-center  justify-between"
              >
                <div className="  relative flex   border py-6 px-9">
                  <img
                    className="    hover:scale-125 duration-500 h-48"
                    src={order.img}
                    alt=""
                  />
                </div>
                <div className=" flex md:px-2  px-4 md:py-2 py-4  gap-40 absolute">
                  <h1 className=" cursor-pointer bg-red-500 p-2  rounded-md text-xs text-white">
                    {order.hot}
                  </h1>
                  <h1 className=" cursor-pointer bg-green-500 p-2  rounded-md  text-xs text-white">
                    {order.discount}
                  </h1>
                </div>
                <div>
                  <h1 className="  hover:text-orange-400 text-lg   text-gray-700 font-bold">
                    {order.name}
                  </h1>
                  <div className=" flex gap-1   justify-center  text-green-500">
                    <span>{order.start}</span>
                    <span>{order.start}</span>
                    <span>{order.start}</span>
                    <span>{order.start}</span>
                    <span>{order.start}</span>
                  </div>
                  <h2 className=" flex font-bold justify-center text-md text-gray-600">
                    {order.p}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStep;

const orders = [
  {
    img: anjur,
    name: "Fresh Red Seedless",
    p: "$8.00",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
    hot: "HOT",
    discount: "-21%",
  },
  {
    img: tam,
    name: "Organic Sweet Tamator",
    p: "$7.99",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
    hot: "HOT",
    discount: "-33%",
  },
  {
    img: gopi,
    name: "Organic cabbage",
    p: "$5.00",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
    hot: "HOT",
    discount: "-28%",
  },

  {
    img: chili,
    name: "Organic Green  Bell Paper",
    p: "$15.00",
    icon: <AiOutlineSearch />,
    heard: <AiFillHeart />,
    start: <AiFillStar />,
    hot: "HOT",
    discount: "-16%",
  },
];
