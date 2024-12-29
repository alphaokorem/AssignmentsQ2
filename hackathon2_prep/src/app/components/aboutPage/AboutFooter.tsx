import Image from "next/image";
import Link from "next/link";
export default function AboutFooter() {
  return (
    <>
      <div className="mt-20 bg-slate-100 pt-16">
        <div className="flex text-center flex-col gap-6 justify-center items-center">
          <h1 className="text-3xl font-bold w-[250px] lg:w-full lg:text-4xl xl:text-5xl">Big Companies Are Here</h1>
          <p className="text-gray-500 text-sm font-semibold md:w-[400px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="bg-slate-100 flex flex-col justify-evenly items-center h-[1200px] py-4 lg:flex-row lg:h-[300px]">
          <Image src={'/footerLogos/hooli.png'} alt="" width={135} height={135}></Image>
          <Image src={'/footerLogos/lyft.png'} alt="" width={135} height={135}></Image>
          <Image src={'/footerLogos/cap.png'} alt="" width={135} height={135}></Image>
          <Image src={'/footerLogos/Vector.png'} alt="" width={135} height={135}></Image>
          <Image src={'/footerLogos/aws.png'} alt="" width={135} height={135}></Image>
          <Image src={'/footerLogos/reddit.png'} alt="" width={135} height={135}></Image>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="bg-blue-700 flex flex-col justify-center items-center text-white gap-6 py-10 lg:w-3/4 lg:items-start lg:px-20 xl:px-40">
            <h2 className="font-semibold">WORK WITH US</h2>
            <h1 className="text-4xl font-bold w-[200px] text-center md:w-full lg:text-start">Now Let&apos;s grow Yours</h1>
            <p className="text-sm w-[200px] text-center md:w-[450px] lg:text-start">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
            <button className="rounded border border-white px-8 py-4 hover:scale-105">
              Button
            </button>
          </div>
          <img src="/about/blueGrow.png" alt="" className="hidden lg:block w-1/3"/>
        </div>

        <div className="flex flex-col justify-between pl-8 pr-24 py-12 gap-12 bg-slate-200 lg:flex-row">
          <p className="font-bold text-3xl">Bandage</p>
          <div className="flex gap-8">
          <Link href={"/"}>
              {" "}
              <Image src={'/fbblue.png'} alt="facebook" className="w-8"  width={135} height={135}></Image>{" "}
            </Link>
            <Link href={"/"}>
              {" "}
              <Image
                src={'/instablue.png'}
                alt="instagram"
                className="w-8"
                width={135} height={135}></Image>{" "}
            </Link>
            <Link href={"/"}>
              {" "}
              <Image
                src={'/twitterblue.png'}
                alt="twitter"
                className="w-8"
                width={135} height={135}></Image>{" "}
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
