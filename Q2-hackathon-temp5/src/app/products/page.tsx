"use client";
import SaleHeader from "../components/SaleHeader";
import Header from "@/app/components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <SaleHeader />
      <Header />
      <div className="font-bold text-2xl text-center my-5">Shop</div>
      <div className="flex flex-col justify-center items-center gap-3 md:flex-row md:flex-wrap">
        <div className="relative w-[205px]">
          <img
            src="/shop/1.jpg"
            alt=""
            className="object-cover brightness-75"
          />
          <div className="absolute inset-20 flex flex-col justify-center items-center text-white w-14">
            <p className="font-bold font-sans">CLOTHS</p>
            <p className="font-bold font-sans">5 Items</p>
          </div>
        </div>
        <div className="relative w-[205px]">
          <img
            src="/shop/2.jpg"
            alt=""
            className="object-cover brightness-75"
          />
          <div className="absolute inset-20 flex flex-col justify-center items-center text-white w-14">
            <p className="font-bold font-sans">CLOTHS</p>
            <p className="font-bold font-sans">5 Items</p>
          </div>
        </div>
        <div className="relative w-[205px]">
          <img
            src="/shop/3.jpg"
            alt=""
            className="object-cover brightness-75"
          />
          <div className="absolute inset-20 flex flex-col justify-center items-center text-white w-14">
            <p className="font-bold font-sans">CLOTHS</p>
            <p className="font-bold font-sans">5 Items</p>
          </div>
        </div>
        <div className="relative w-[205px]">
          <img
            src="/shop/4.jpg"
            alt=""
            className="object-cover brightness-75"
          />
          <div className="absolute inset-20 flex flex-col justify-center items-center text-white w-14">
            <p className="font-bold font-sans">CLOTHS</p>
            <p className="font-bold font-sans">5 Items</p>
          </div>
        </div>
        <div className="relative w-[205px] lg:hidden xl:block">
          <img
            src="/shop/5.jpg"
            alt=""
            className="object-cover brightness-75"
          />
          <div className="absolute inset-20 flex flex-col justify-center items-center text-white w-14">
            <p className="font-bold font-sans">CLOTHS</p>
            <p className="font-bold font-sans">5 Items</p>
          </div>
        </div>
      </div>

      <div className="mt-28 flex flex-col justify-center items-center gap-5">
        <div>
          <p className="text-sm text-gray-500 font-bold">
            Showing all 12 results
          </p>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <p className="text-gray-500 font-semibold">Views: </p>
          <button className="border rounded p-4">
            <img src="/table.png" alt="" />
          </button>
          <button className="border rounded p-4">
            <img src="/menu.png" alt="" />
          </button>
        </div>

        <div className="flex gap-4">
          <div className="">
            <button
              type="button"
              id="dropdownToggle"
              onClick={handleToggle}
              className="px-5 py-2.5 border border-gray-300 text-gray-500  outline-none bg-white hover:bg-gray-50 rounded"
            >
              Popularity
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-500 inline ml-3"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
            </button>

            <ul
              id="dropdownMenu"
              className={`absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-[150px] divide-y max-h-96 overflow-auto ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                Hoodies
              </li>
              <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                Sweaters
              </li>
              <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                Socks
              </li>
              <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                Trousers
              </li>
            </ul>
          </div>
          <button className="px-5 py-2.5 border border-gray-300 text-white outline-none bg-blue-500 rounded">
            Filter
          </button>
        </div>
      </div>
      <Products />
      <Footer />
    </>
  );
}
