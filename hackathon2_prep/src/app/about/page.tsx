import React from "react";
import AboutHeader from "../components/aboutPage/AboutHeader";
import AboutFooter from "../components/aboutPage/AboutFooter";

const team = [
  {pic : "/about/team1.png"},
  {pic : "/about/team2.jpg"},
  {pic : "/about/team3.png"},
]

const AboutUs = () => {
  return (
    <>
      <AboutHeader />
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col text-center py-16 items-center justify-center lg:text-start lg:items-start lg:ml-20 xl:ml-40">
          <p className="hidden lg:block text-sm font-bold">ABOUT COMPANY</p>
          <br />
          <h1 className="text-4xl font-bold lg:font-extrabold lg:text-6xl">
            ABOUT US
          </h1>
          <br />
          <p className="w-[250px] text-gray-500">
            We know how large objects will act, but things on a small scale
          </p>
          <br />
          <button className="flex gap-1 bg-blue-500 text-white p-3 text-sm justify-center items-center rounded">
            Get Quote Now
          </button>
        </div>

        <div>
          <img src="/about/y.png" alt="" className="md:m-auto xl:mr-20" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-16 text-center mt-20 lg:flex-row lg:text-start">
        <div className="gap-2 flex flex-col">
          <p className="text-red-700 text-sm">Problem trying</p>
          <p className="font-bold w-[250px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div>
          <p className="text-left text-gray-500 text-sm mx-10 md:w-[400px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-12 my-20 md:flex-row lg:justify-around lg:mx-28">
        <div>
          <h1 className="text-4xl font-bold">15K</h1>{" "}
          <p className="text-sm text-gray-500 font-semibold">Happy Customers</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">150K</h1>{" "}
          <p className="text-sm text-gray-500 font-semibold">
            Monthly Visitors
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">15</h1>{" "}
          <p className="text-sm text-gray-500 font-semibold">
            Customers Worldwide
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">100+</h1>{" "}
          <p className="text-sm text-gray-500 font-semibold">Top Partners</p>
        </div>
      </div>

      <div className="flex justify-center mb-32">
        <div className="relative w-fit">
          {/* Video tags used here */}
          {/* <video src=""></video> */}

          <img
            src="/about/video.png"
            alt=""
            className="m-auto md:w-[500px] lg:h-[450px] lg:w-[600px] rounded-2xl "
          />
          <button>
            <img
              src="/play.png"
              alt=""
              className="p-2 bg-blue-500 rounded-full w-14 h-14 absolute inset-32 md:inset-56 lg:inset-x-64 "
            />
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center mb-20">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <br />
          <p className="text-sm font-bold text-gray-500 w-[250px] text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="flex flex-col justify-around items-center lg:flex-row">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col gap-4 justify-center items-center mb-16">
              <img src={member.pic} alt="" />
              <h2 className="text-xl font-bold">Username</h2>
              <p className="text-sm text-gray-500 font-bold">Profession</p>
              <div className=" flex gap-4">
                <img src="/about/fb.png" alt="" className=""/>
                <img src="/about/insta.png" alt="" className=""/>
                <img src="/about/twitter.png" alt="" className=""/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AboutFooter/>
    </>
  );
};

export default AboutUs;
