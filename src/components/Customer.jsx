import React from "react";
import rajan from "../assets/rajan.jpg";
import loki from "../assets/loki.jpg";
import git from "../assets/git.jpg";
import brand1 from "../assets/brand1.webp";
import brand2 from "../assets/brand2.webp";
import brand3 from "../assets/brand3.webp";
import brand4 from "../assets/brand4.webp";
import brand5 from "../assets/brand5.webp";
import brand6 from "../assets/brand6.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Customer = () => {
  return (
    <div
      name="customer"
      className="  flex  flex-col justify-center md:mt-[-120px]  items-center  md:pb-0 pb-8 md:h-[110vh] bg-gray-100"
    >
      <div className=" flex w-full md:w-9/12 justify-center items-center">
        <Swiper
          spaceBetween={30}
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
          <div className="  py-32">
            {customers.map((customer, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className=" md:px-72 px-14 md:py-20 py-14 flex flex-col gap-4"
                >
                  <div className=" flex justify-center items-center  ">
                    <img
                      className=" h-32 w-32 md:h-40 md:w-40 object-cover rounded-full"
                      src={customer.img}
                      alt=""
                    />
                  </div>
                  <div className="  pt-5 flex flex-col justify-center gap-3">
                    <h1 className=" md:text-2xl  text-gray-800">
                      {customer.desc}
                    </h1>
                    <span className=" flex items-center gap-3 justify-center text-md">
                      <h1 className=" text-green-500 font-bold">
                        {customer.name}
                      </h1>
                      <h2 className=" text-sm  text-gray-500">
                        {customer.cust}
                      </h2>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="  grid   gap-4 md:grid-cols-6 grid-cols-2">
        <img className=" cursor-pointer" src={brand1} alt="" />
        <img className=" cursor-default" src={brand2} alt="" />
        <img className=" cursor-pointer" src={brand3} alt="" />
        <img className=" cursor-pointer" src={brand4} alt="" />
        <img className=" cursor-pointer" src={brand5} alt="" />
        <img className=" cursor-pointer" src={brand6} alt="" />
      </div>
    </div>
  );
};

export default Customer;

const customers = [
  {
    img: rajan,
    name: "Rajan Bahadur Shahi",
    cust: "Happy Customer",
    desc: "Our support and response has been amazing ,helping with me with several issues i came across and got them sloved almost the same day.A pleasure to work with them!",
  },
  {
    img: git,
    name: "Gita kumari Bista",
    cust: "Happy Customer",
    desc: "Code, template and other are very good. The support has served me immediately and solved my problems when i need help.Are to be congratulated.",
  },
  {
    img: loki,
    name: "Lokendra Chaulagain",
    cust: "Happy Customer",
    desc: "Perfect theme and best of all thatyou have many option to choose! Very fast responding !  I highly recommend this thehe and these people! ",
  },
];
