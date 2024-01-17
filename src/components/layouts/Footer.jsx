import React from 'react';
import logo from "./../../../public/images/logo.png"; // Ensure this path is correct
import './../css/index.css';

function Footer() {
  // Function to handle logo load errors
  const renderLogo = () => {
    return logo ? (
      <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
    ) : (
      <div>Logo not found</div>
    );
  };

  return (
    <footer className="bg-black text-white p-10">
      <div className="flex flex-wrap  items-center">
        {renderLogo()}
        <h1 className="text-2xl font-bold">WOTKNOT</h1>
        </div>

        <div className='flex'>
        <div className="flex flex-wrap gap-2">
          <a href="" className="hover:text-gray-30">CONTACT</a>
          <a href="" className="hover:text-gray-300">ADVERTISING</a>
          <a href="" className="hover:text-gray-300">TERMS OF USE</a>
          <a href="" className="hover:text-gray-300">PRIVACY POLICY</a>
          <a href="" className="hover:text-gray-300">COOKIES POLICY</a>
          <a href="" className="hover:text-gray-300">WOTKNOT LABEL</a>
          <a href="" className="hover:text-gray-300">WOTKNOT FILMS</a>
          </div>

          <div className="flex flex-wrap gap-2">
          <a href="" className="hover:text-gray-300">CONTACT</a>
          <a href="" className="hover:text-gray-300">ADVERTISING</a>
          <a href="" className="hover:text-gray-300">TERMS OF USE</a>
          <a href="" className="hover:text-gray-300">PRIVACY POLICY</a>
          <a href="" className="hover:text-gray-300">COOKIES POLICY</a>
          <a href="" className="hover:text-gray-300">WOTKNOT LABEL</a>
          <a href="" className="hover:text-gray-300">WOTKNOT FILMS</a>
          </div>

          </div>

          <div>
            <div>
              <h1 className='text-3xl text-gray-300 w-[450px] text-center mx-[400px] my-[50px]'>CLICK ME. READ ME. WOTKNOT NEWSLETTER</h1>
            </div>
            <div>
              <input type="email" placeholder='Email address' className='bg-gray-600 w-[500px] h-[50px] my-[-30px] mx-[380px] placeholder:text-gray-200 pl-[20px]'/>
              <button className='border-2 border-white p-4 w-[200px] mx-[535px] my-[50px]  hover:underline decoration-solid'>SIGN UP</button>
            </div>
          </div>
          <h1 className='text-xs text-gray-400 font-serif'>©2024 THE WOTKNOTMAG, INC. ALL RIGHTS RESERVED.</h1>
    </footer>
  );
}

export default Footer;
