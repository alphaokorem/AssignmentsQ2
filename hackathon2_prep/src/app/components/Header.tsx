"use client"

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="flex border-b py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex   justify-between items-center w-full">
          <p className="text-gray-800 text-2xl font-semibold">
            Bandage
          </p>
          
          <div
            id="collapseMenu"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              id="toggleClose"
              onClick={handleToggleMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:ml-16 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <Link href="#"
                onClick={(e) => e.preventDefault()}>
                    <p className="text-xl"><b>Bandage</b></p>
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link href="/"
                  className="  text-gray-800 hover:border-b-2 hover:border-stone-800 block font-semibold text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <button
                  className="flex  text-gray-800 hover:border-b-2 hover:border-stone-800 font-semibold text-[15px]"
                >
                   <Link href={"products"}> Shop</Link>
                    
                </button>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="about"
                  className="  text-gray-800 block hover:border-b-2 hover:border-stone-800 font-semibold text-[15px]"
                >
                    About
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="javascript:void(0)"
                  className="  text-gray-800 block hover:border-b-2 hover:border-stone-800 font-semibold text-[15px]"
                >
                    Blog
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="javascript:void(0)"
                  className="  text-gray-800 block hover:border-b-2 hover:border-stone-800 font-semibold text-[15px]"
                >
                  Content
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="javascript:void(0)"
                  className="  text-gray-800 block hover:border-b-2 hover:border-stone-800 font-semibold text-[15px]"
                >
                  Pages
                </Link>
              </li>
            </ul>
          </div>

          <button
            id="toggleOpen"
            className="lg:hidden ml-auto"
            onClick={handleToggleMenu}
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>



          <div className="hidden lg:flex space-x-5 xl:ml-80  lg:ml-8 text-blue-500 ">
            <div className="">
              <Link href={"javascript:void(0)"} className="flex align-middle justify-center">
                <img src="/personBlue.png" alt="" className="h-6"/>
                <p className="text-blue-500">Login / Register</p>
              </Link>
            </div>
              
            <Link href={'javascript:void(0)'}> <img src="/search.png" alt="" className="h-7 hover:scale-125"/> </Link>
            <Link href={'javascript:void(0)'}> <img src="/heart.png" alt="" className="h-7 hover:scale-125"/> </Link>1
            <Link href={'javascript:void(0)'}> <img src="/cart.png" alt="" className="h-7 hover:scale-125"/> </Link>1
          </div>
        </div>
      </header>
    </>
  );
}
