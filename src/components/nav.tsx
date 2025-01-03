// "use client"
// import React, { useState } from 'react';
// import { IoMdSearch } from "react-icons/io";
// import { CiShoppingCart } from "react-icons/ci";

// import { MdOutlinePerson } from "react-icons/md";
// import { FiHeart } from "react-icons/fi";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger icons
// import Link from 'next/link';

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='flex justify-between items-center flex-wrap p-4'>
//       {/* Logo Section */}
//       <div>
//         <h1 className='font-bold text-[24px]'>Bandage</h1>
//       </div>

//       {/* Left Side Icons and Hamburger */}
//       <div className="flex items-center lg:hidden">
//         <a className="text-2xl mr-4 hover:text-gray-900">
//           <IoMdSearch />
//         </a>
//         <a className="text-2xl mr-4 hover:text-gray-900">
//           <CiShoppingCart />
//         </a>
//         <button onClick={toggleMenu} className="text-2xl">
//           {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <nav
//         className={`${
//           menuOpen ? 'flex' : 'hidden'
//         } lg:flex flex-col lg:flex-row lg:gap-4 absolute lg:static top-16 left-0 lg:top-0 bg-white lg:bg-transparent w-full lg:w-auto z-10 shadow-lg lg:shadow-none`}
//       >
//         <Link href="./" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Home</Link>
//         <Link href="./shop" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Shop</Link>
//         <Link href="./about" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">About</Link>
//         <Link href="./detail" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Blog</Link>
//         <Link href="./contact" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Contact</Link>
//         <Link href="./shop" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Pages</Link>
//       </nav>

//       {/* Action Icons */}
//       <div className="hidden lg:flex items-center gap-4 text-blue-500">
//         <a className="flex items-center gap-2 text-base">
//           <MdOutlinePerson />
//           <span>Login / Register</span>
//         </a>
//         <a className="hover:text-gray-900 text-base"><IoMdSearch /></a>
//         <a className="hover:text-gray-900 text-base"><CiShoppingCart /></a>
       
//         <a className="hover:text-gray-900 text-base">< FiHeart /></a>
//       </div>
//     </div>
//   );
// };

// export default Nav;

'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaSearch, FaShoppingCart, FaBars, FaHeart } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center bg-gray-800 text-white text-sm px-6 py-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaPhone /> <span>+123 456 789</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope /> <span>email@example.com</span>
          </div>
        </div>
        <div className="text-center">
          <span>Follow us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Bandage</div>

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
         <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Home</Link>
          <div className="relative group">
            <Link href="./shop" className="text-gray-700 hover:text-blue-500 flex items-center gap-1 pb-2">
              Shop
               <span>&#x25BC;</span>
            </Link>
            {/* <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg mt-2 p-2">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Category 1</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Category 2</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">Category 3</a>
            </div> */}
          </div>
          
            
            <Link href={"./about"}className="text-gray-700 hover:text-blue-500 mb-2">About</Link>
            {/* <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Blog</Link> */}
            <Link href={"./contact"}className="text-gray-700 hover:text-blue-500 mb-2">Contact</Link>

            <Link href={"./shop"}className="text-gray-700 hover:text-blue-500 mb-2">Pages</Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">Login</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Register</a>
            <FaSearch className="cursor-pointer text-gray-700 hover:text-blue-500" />
            <FaShoppingCart className="cursor-pointer text-gray-700 hover:text-blue-500" />
            <FaHeart className="cursor-pointer text-gray-700 hover:text-blue-500" />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <FaBars
              className="cursor-pointer text-gray-700 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center p-4">
          
            <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Home</Link>
            <Link href={"./shop"}className="text-gray-700 hover:text-blue-500 mb-2">Shop</Link>
            <Link href={"./about"}className="text-gray-700 hover:text-blue-500 mb-2">About</Link>
            {/* <Link href={"./"}className="text-gray-700 hover:text-blue-500 mb-2">Blog</Link> */}
            <Link href={"./contact"}className="text-gray-700 hover:text-blue-500 mb-2">Contact</Link>

            <Link href={"./shop"}className="text-gray-700 hover:text-blue-500 mb-2">Pages</Link>

        
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


