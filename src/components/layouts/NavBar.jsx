// import React from 'react'
import logo from "./../../../public/images/logo.png"
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaYoutube, FaSearch  } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

function NavBar() {
  return (
    <div className="fixed bg-slate-100 container mx-auto py-3 px-5">
      <nav className="sticky flex justify-between items-center ">
        <div className="flex gap-5 items-center">
          <span className="text-3xl font-bold italic"><img src={logo}  style={{width:"50px", height:"50px"}}alt="" /></span>
          <div className="border-2 w-[1150px]">
            <ul className="flex text-lg font-bold">
              <a href="/" className="border-2 p-[20px] w-[100px] text-center hover:text-blue-300 hover:underline decoration-solid">MUSIC</a>
              <a href="/" className="border-2 p-[20px] w-[100px] text-center hover:text-red-400 hover:underline decoration-solid">STYLE</a>
              <a href="/" className="border-2 p-[20px] pr-[10px] w-[100px] text-center hover:text-green-300 hover:underline decoration-solid">CULTURE</a>
              <a href="/" className="border-2 p-[20px] w-[100px] text-center hover:text-green-300 hover:underline decoration-solid">VIDEO</a>
              <li className="flex gap-6 p-[20px]">
                <a href="" className="hover:underline decoration-solid">MAGAZINE</a>
                <a href="" className="hover:underline decoration-solid">EVENTS</a>
                <a href="" className="hover:underline decoration-solid">SHOP</a>
              </li>
              <li className="flex gap-6 p-[20px]">
                <a href=""><BsTwitterX className="hover:text-slate-500 text-xl" /></a>
                <a href="" ><FaFacebookSquare className="hover:text-blue-500 text-xl" /></a>
                <a href=""><FaYoutube className="hover:text-red-500 text-xl" /></a>
                <a href=""><ImInstagram className="hover:text-blue-500 text-xl bg-gradient-to-r from-indigo-500 to-pink-500" /></a>
              </li>
              <li className="flex gap-6 p-[10px] mx-[305px] flex-auto">
                <form className="h-full flex items-center border-2">
                  <FaSearch className="text-4xl p-[10px] w-[50px]" />
                </form>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar