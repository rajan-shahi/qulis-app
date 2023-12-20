import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { HiOutlineSearch } from "react-icons/hi";
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => {
    setNav(!nav);
  };

  return (
    <div className="   z-50 bg-white fixed left-0 right-0  flex   justify-center w-full border-b-2   ">
      <div className=" md:flex   hidden justify-center items-center">
        <div>
          <img
            className=" border-r py-6 px-6 cursor-pointer"
            src={logo}
            alt=""
          />
        </div>
        <div className=" flex  gap-8 text-xl  text-green-500  font-bold border-r py-6 px-10">
         
          <Link to="stepfood" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Dropstep Food
            </h1>
          </Link>
          <Link to="customer" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Customers
            </h1>
          </Link>
          <Link to="news" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Latest News
            </h1>
          </Link>
          <Link to="organic" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Organic Straberry
            </h1>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Contact Us
            </h1>
          </Link>
        </div>
        <div className=" flex gap-1 items-center   w-[300px] px-5">
          <span className=" cursor-pointer">
            <HiOutlineSearch size={20} />
          </span>
          <input className=" outline-none" type="text" placeholder="Search" />
        </div>
        <div className=" flex  gap-5 tems-center">
          <span className="  text-orange-400 cursor-pointer ">
            <FaShoppingBasket size={30} />
          </span>
          <span className="  text-green-600  cursor-pointer">
            <AiOutlineMenu size={30} />
          </span>
        </div>
      </div>
      {/* mobile menu */}
      <div className=" md:hidden flex items-center justify-between left-0 right-0  fixed bg-white z-50 py-4 px-4 border-b border-gray-300 ">
        <div className=" cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <div onClick={handleclick} className=" flex flex-col justify-end">
          {!nav ? (
            <span className=" cursor-pointer">
              <AiOutlineMenu size={30} />{" "}
            </span>
          ) : (
            <span>
              <AiOutlineClose size={30} />
            </span>
          )}
        </div>
      </div>
      {nav && (
        <div className=" h-[60vh] justify-center flex flex-col z-40 items-center  gap-8 text-xl w-full  text-green-500  font-bold    bg-black/80   py-10">
           <Link onClick={handleclick} to="home" spy={true} smooth={true} duration={500}>
            <h1 className=" pt-14 cursor-pointer hover:text-orange-400 duration-300">
              Home
            </h1>
          </Link>
          <Link
            onClick={handleclick}
            to="stepfood"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Dropstep Food
            </h1>
          </Link>
          <Link
            onClick={handleclick}
            to="customer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Customers
            </h1>
          </Link>
          <Link
            onClick={handleclick}
            to="news"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Latest News
            </h1>
          </Link>
          
          <Link
            onClick={handleclick}
            to="organic"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Organic Straberry
            </h1>
          </Link>
          <Link
            onClick={handleclick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <h1 className=" cursor-pointer hover:text-orange-400 duration-300">
              Contact Us
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
