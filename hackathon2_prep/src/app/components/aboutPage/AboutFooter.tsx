import React from "react";

import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="mt-20">
        <div className="bg-slate-100 flex flex-col justify-evenly items-center h-[1200px] py-24 lg:flex-row lg:h-[500px]">
          <Image src={"/public/footerLogos/hooli.png"} alt=""></Image>
          <Image src={"/public/footerLogos/lyft.png"} alt=""></Image>
          <Image src={"/public/footerLogos/cap.png"} alt=""></Image>
          <Image src={"/public/footerLogos/Vector.png"} alt=""></Image>
          <Image src={"/public/footerLogos/aws.png"} alt=""></Image>
          <Image src={"/public/footerLogos/reddit.png"} alt=""></Image>
        </div>
        <div className="flex flex-col justify-between pl-8 pr-24 py-12 gap-12 bg-slate-200 lg:flex-row">
          <p className="font-bold text-3xl">Bandage</p>
          <div className="flex gap-8">
            <Link href={"/"}>
              {" "}
              <Image src={"/fbblue.png"} alt="facebook" className="w-8"></Image>{" "}
            </Link>
            <Link href={"/"}>
              {" "}
              <Image
                src={"/public/instablue.png"}
                alt="instagram"
                className="w-8"
              ></Image>{" "}
            </Link>
            <Link href={"/"}>
              {" "}
              <Image
                src={"/public/twitterblue.png"}
                alt="twitter"
                className="w-8"
              ></Image>{" "}
            </Link>
          </div>
        </div>

        <div>
          <footer className="py-12 px-10 font-sans tracking-wide">
            <div className="flex flex-col-reverse lg:flex-row-reverse justify-evenly gap-8 font-semibold">
              <div>
                <h4 className="text-black font-bold text-lg mb-6">
                  Get In Touch
                </h4>

                <div className="flex mt-6">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-200 text-[15px] rounded-l py-3 px-4 max-md:w-full outline-none"
                  />
                  <button className="bg-blue-500 text-white rounded-r py-3 px-4 text-[15px] tracking-wide">
                    Subscribe
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-black font-bold text-lg mb-6">Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className=" text-black text-[15px]"
                    >
                      IOS & Android
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Watch a Demo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-black font-bold text-lg mb-6">Features</h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Business Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      User Analytic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Live Chat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Unlimited Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-black font-bold text-lg mb-6">Legal</h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Carrier
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      We are hiring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-black font-bold text-lg mb-6">
                  Company Info
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Carrier
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      We are hiring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="text-black text-[15px]"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <div className="bg-slate-100 p-8">
          <p className="font-semibold text-gray-500 ">
            Made With Love by Alphaokorem, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
