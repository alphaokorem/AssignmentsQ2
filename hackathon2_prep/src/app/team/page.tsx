import Header from "../components/Header";
import PricingFooter from "../components/pricingPage/PricingFooter";

let teamMembers = [
  "/teamPage/a.png",
  "/teamPage/b.png",
  "/teamPage/c.png",
  "/teamPage/d.png",
  "/teamPage/e.png",
  "/teamPage/f.png",
  "/teamPage/g.png",
  "/teamPage/h.png",
];
export default function Team() {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center my-16">
        <p className="text-sm text-gray-500 font-semibold">WHAT WE DO</p>
        <br />
        <h1 className="text-3xl font-bold text-center w-[250px] xl:text-5xl">
          Innovation tailored for you
        </h1>
        <br />
        <div className="flex justify-center items-center">
          <p className="font-bold ">Home</p>{" "}
          <img src="/rightgray.png" alt="" className="h-6" />{" "}
          <p className="font-bold text-gray-500">Team</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[100vw] lg:flex-row justify-center items-center">
        <div className="">
          <img src="/teamPage/red.png" alt="" className="w-full" />
        </div>

        <div className="flex flex-col justify-start items-center w-fit md:flex-row gap-1 overflow-hidden lg:flex-wrap">
         <div className="flex flex-col gap-2"> <img src="/teamPage/1.png" alt="" className="" />
          <img src="/teamPage/2.png" alt="" className="" /></div>
          <div className="flex flex-col gap-2"><img src="/teamPage/3.png" alt="" className="" />
          <img src="/teamPage/4.png" alt="" className="" /></div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center my-16 xl:text-5xl">Meet Our Team</h1>

      <div className="flex flex-col justify-around items-center lg:flex-row lg:flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-center items-center mb-16"
          >
            <img src={member} alt="" />
            <h2 className="text-xl font-bold">Username</h2>
            <p className="text-sm text-gray-500 font-bold">Profession</p>
            <div className="flex gap-4">
              <img src="/about/fb.png" alt="" className="" />
              <img src="/about/insta.png" alt="" className="" />
              <img src="/about/twitter.png" alt="" className="" />
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <PricingFooter />
    </>
  );
}
