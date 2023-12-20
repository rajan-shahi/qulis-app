import React from "react";
import fresh from "../assets/fresh-organic-vegetable_114106-1589.webp";
import pexel from "../assets/pexels-photo-1458694.webp";
import women from "../assets/woman-takes-fresh-organic-vegetables.webp";
import is from "../assets/fresh-greens-and-vegetables-on-a-display-in-a-supermarket.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Topbar = () => {
  return (
    <div name="home" className=" flex flex-col justify-center">
      <div className=" flex justify-center ">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {vegitables.map((vegitable, index) => (
            <SwiperSlide>
              <div key={index} className="  flex flex-col md:py-0 py-10">
                <div>
                  <img
                    className=" md:h-[700px]  h-[300px] object-cover w-full"
                    src={vegitable.img}
                    alt=""
                  />
                </div>
                <div className=" flex z-10  md:py-60  py-16 md:px-96  px-8 absolute flex-col  md:gap-6  gap-4 justify-center  items-center">
                  <h1 className=" md:text-5xl text-xl  text-white font-bold">
                    {vegitable.name}
                  </h1>
                  <h2 className="  md:text-7xl  text-3xl  text-white font-bold">
                    {vegitable.MODEL}
                  </h2>
                  <p className=" md:text-3xl  text-lg text-white font-bold">
                    {vegitable.desc}
                  </p>
                  <button className=" bg-white md:px-10 px-6  md:py-3  py-2 rounded-full  text-green-600  hover:bg-green-500 hover:text-white">
                    {vegitable.btn}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Topbar;

const vegitables = [
  {
    img: fresh,
    name: "FRESH FOOD ",
    MODEL: "100% ORGANIC",
    desc: "fram fresh product Right to your Door",
    btn: "SHOP NOW",
  },
  {
    img: pexel,
    name: "FRESH FOOD ",
    MODEL: " DELICIOUS 100%",
    desc: "We supply highly quality organic",
    btn: "SHOP NOW",
  },
  {
    img: women,
    name: "FRESH FOOD ",
    MODEL: "100% ORGANIC",
    desc: "fram fresh product Right to your Door",
    btn: "SHOP NOW",
  },
  {
    img: is,
    name: "FRESH FOOD ",
    MODEL: "100% ORGANIC",
    desc: "fram fresh product Right to your Door",
    btn: "SHOP NOW",
  },
];
