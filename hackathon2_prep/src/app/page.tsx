import EditorsPick from "./components/editorsPick";
import Header from "./components/Header";
import SaleHeader from "./components/SaleHeader";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <SaleHeader />
      <Header />
      <div className="flex justify-center items-center text-center flex-col bg-bannerImg bg-top lg:text-start lg:items-start blueBanner text-white sm:px-52">
        <p className="w-28">SUMMER 2020</p>
        <h1 className="sm:text-[60px] font-bold text-[40px]">NEW COLLECTION</h1>
        <br />
        <p className="sm:w-[260px] w-[160px]">
          We know how large objects will act, but things on a small scale.
        </p>
        <br />
        <button className="w-[160px] h-14 bg-green-500 font-bold text-lg hover:scale-105">
          SHOP NOW
        </button>
      </div>

      <EditorsPick />
      <br />
      <br />
      <br />
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-gray-500 w-[200px] lg:w-auto  text-center my-4 text-lg">
          Featured Products
        </p>
        <p className="text-[25px] font-bold mt-4 text-center">
          BESTSELLER PRODUCTS
        </p>
        <p className="font-bold text-gray-500 w-[200px] lg:w-auto  text-center my-4">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <br />
      <Products />

      <div
        id="vita"
        className="bg-vitaGreen h-[1200px] lg:h-auto lg:px-[202px] flex flex-col justify-end lg:justify-evenly items-center gap-12 lg:flex-row pt-16"
      >
        <div className="text-white flex flex-col justify-center items-center lg:items-start lg:h-fit">
          <p className="text-lg font-semibold">SUMMER 2020</p>
          <p className="text-[40px] w-[240px] text-center font-bold mt-8 lg:text-start lg:text-[45px] ">
            Vita Classic Product
          </p>
          <p className="text-lg font-semibold w-[230px] text-center mt-4 lg:text-start lg:w-[300px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="text-center mt-6 lg:flex lg:gap-6 lg:justify-center lg:items-center">
            <p className="mb-4 text-lg font-semibold">$16.48</p>
            <button className="w-[160px] h-12 bg-green-500 font-bold text-sm hover:scale-105 rounded">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="h-fit lg:h-auto ">
          <img src="/vitaHero/vita.png" alt="" className="" />
        </div>
      </div>

      <div
        id="neural Universe"
        className=" h-[1000px] lg:h-auto lg:px-[100px] flex flex-col justify-end lg:justify-evenly items-center gap-12 lg:flex-row-reverse pt-16"
      >
        <div className="text-gray-500 flex flex-col justify-end items-center lg:items-start lg:h-fit">
          <p className="text-lg font-semibold">SUMMER 2020</p>
          <p className="text-black text-[40px] w-[240px] text-center font-bold mt-8 lg:text-start lg:text-[30px] ">
            Part of the Neural Universe
          </p>
          <p className="text-lg font-semibold w-[230px] text-center mt-4 lg:text-start lg:w-[300px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="text-center mt-6 flex flex-col gap-6 justify-center items-center lg:flex-row">
            <button className="text-white w-[160px] h-12 bg-blue-600 font-bold text-sm hover:scale-105 rounded">
              BUY NOW
            </button>
            <button className="text-blue-600 w-[180px] h-12 font-bold border-2 border-blue-600 text-sm hover:scale-105 rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="h-fit lg:h-auto ">
          <img src="/neuralUniverse/husbandwife.png" alt="" className="" />
        </div>
      </div>

      <Blogs />
      <Footer />
    </>
  );
}