import Link from "next/link"


const Header = () => {
  return (
    <div className="px-4 py-1 bg-[#8b5e34] border-4 border-x-[#2E1B12] border-b-0 border-t-[#2E1B12] border-t-8 pb-4">
      <br />
      <div id="logo" className="font-[cursive] text-4xl underline lg:pl-20">
        Blessed Bakers🎂
      </div>
      <br />
      <br/>
      <div className="flex justify-end items-center flex-col lg:flex-row lg:gap-40">
      <div className="flex justify-evenly items-center font-semibold gap-8 md:gap-16">
        <Link href={"/"} className="hover:scale-105 hover:underline"> <h1>Home</h1> </Link>
        <Link href={"cakes"} className="hover:scale-105 hover:underline"> <h1>Cakes</h1> </Link>
        <Link href={"bakers"} className="hover:scale-105 hover:underline"> <h1>Bakers</h1> </Link>
        <Link href={"contact"} className="hover:scale-105 hover:underline"> <h1>Contact</h1> </Link>
      </div>
      <br />
      <div className="flex justify-end items-center gap-4">
        <button className="rounded-full border-2 px-6 py-2 text-sm border-black hover:scale-105 font-semibold">Login</button>
        <button className="rounded-full border-2 px-5 py-2 text-sm border-black hover:scale-105 font-semibold">Sign in</button>
      </div>
      </div>
    </div>
  )
}

export default Header