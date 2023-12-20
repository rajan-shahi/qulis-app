import React from "react";
import blog1 from "../assets/blog-img1-391x207.webp";
import blog2 from "../assets/blog-img2-391x207.webp";
import blog3 from "../assets/blog-img3-391x207.webp";
import { BsFillPersonFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
const News = () => {
  return (
    <div name="news" className=" flex md:px-0 px-4 justify-center bg-gray-100 border-t md:py-16  py-10">
      <div className=" flex  flex-col justify-center  w-full md:w-9/12">
        <div className=" flex justify-center">
          <h1 className=" md:text-4xl text-2xl text-black font-bold">LATEST NEWS</h1>
        </div>
        <div className=" md:flex py-8 gap-6 ">
          {latests.map((latest, index) => (
            <div key={index}>
              <div>
                <img
                  className="  relative  cursor-pointer"
                  src={latest.img}
                  alt=""
                />
              </div>
              <div className="   -mt-14  ml-6 bg-gray-100 rounded-lg absolute">
                <h1 className=" flex px-6 py-2  text-sm  text-orange-500 cursor-pointer  justify-center">{latest.date}</h1>
              </div>
              <div className=" flex flex-col md:gap-6  gap-4 px-6  shadow-lg py-8">
                <div className=" flex gap-4">
                  <span className=" flex  gap-1 justify-center items-center">
                    <h2 className=" text-gray-500">{latest.person}</h2>
                    <h1 className="   text-sm text-gray-500 hover:text-green-500 duration-500 cursor-pointer">
                      {latest.post}
                    </h1>
                  </span>
                  <span className=" flex gap-1 justify-center items-center">
                    <h1 className=" text-gray-500">{latest.cmt}</h1>
                    <h2 className="text-green-500 cursor-pointer hover:text-black duration-500">
                      {latest.comment}
                    </h2>
                  </span>
                </div>
                <div>
                  <h1 className=" text-lg cursor-pointer   text-gray-700 font-bold">
                    {latest.them}
                  </h1>
                </div>
                <div>
                  <p className=" text-md text-gray-600">{latest.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

const latests = [
  {
    img: blog1,
    person: <BsFillPersonFill />,
    post: "Posted by Gita",
    cmt: <FaComments />,
    comment: "11 comments",
    them: "Powerful and flexible premium Ecommerce themes",
    desc: "Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu",
    date: "25 DEC",
  },
  {
    img: blog2,
    person: <BsFillPersonFill />,
    post: "Posted by Rajan",
    cmt: <FaComments />,
    comment: "9 comments",
    them: "Awesome template with lot’s of features on the board!",
    desc: "Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu",
    date: "7 JUN",
  },
  {
    img: blog3,
    person: <BsFillPersonFill />,
    post: "Posted by Lokendra",
    cmt: <FaComments />,
    comment: "22 comments",
    them: "Premium template with unlimited colours, and fully Customizable",
    desc: "Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum facilisis sed non est. Ut mi metus, semper eu",
    date: "11 SEP",
  },
];
