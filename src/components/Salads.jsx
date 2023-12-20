import React from "react";
import p1 from "../assets/p1-100x100.webp";
import p11 from "../assets/p11-100x100.webp";
import p12 from "../assets/p12-100x100.webp";
import p27 from "../assets/p27-100x100.webp";
import p5 from "../assets/p5-100x100.webp";
import p8 from "../assets/p8-100x100.webp";
import p9 from "../assets/p9-100x100.webp";

const Salads = () => {
  return (
    <div className=" md:pb-10 md:py-0 py-8   md:bg-gray-100 md:mt-[-50px] flex justify-center">
      <div className=" md:px-0 px-4 grid md:grid-cols-8 grid-cols-2 shadow-lg shadow-slate-300  bg-white  md:border-2 justify-between w-full md:w-9/12 z-20">
        {salads.map((salad,index)=>(
            <div key={index} className=" flex flex-col  justify-center  items-center md:px-4 md:py-10  md:pb-6 pb-8" >
                <div className="    cursor-pointer">
                    <img src={salad.img} alt="" />
                </div>
                <div>
                    <h1 className="  flex justify-center  text-gray-500  text-sm" >{ salad.name}</h1>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Salads;

const salads = [
  {
    img: p1,
    name: "BEANS",
  },
  {
    img: p11,
    name: "BEERIES",
  },
  {
    img: p12,
    name: "CITRUS",
  },
  {
    img: p27,
    name: "FRUITS",
  },
  {
    img: p5,
    name: "JUICES",
  },
  {
    img: p8,
    name: "LETTURE",
  },
  {
    img: p11,
    name: "BEERIES",
  },
  {
    img: p9,
    name: "MEATS",
  },

];
