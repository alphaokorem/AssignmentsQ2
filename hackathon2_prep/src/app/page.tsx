import EditorsPick from "./components/editorsPick";
import Header from "./components/Header";
import SaleHeader from "./components/SaleHeader";
export default function Home() {
  return (
    <>
    <SaleHeader/>
      <Header/>
      <div className="flex justify-center items-center text-center flex-col bg-bannerImg bg-top lg:text-start lg:items-start blueBanner text-white sm:px-52">
          <p className="w-28">SUMMER 2020</p>
          <h1 className="sm:text-[60px] font-bold text-[40px]">NEW COLLECTION</h1>
          <br />
          <p className="sm:w-[260px] w-[160px]">We know how large objects will act, but things on a small scale.</p>
          <br />
          <button className="w-[160px] h-14 bg-green-500 font-bold text-lg">SHOP NOW</button>
      </div>

      <EditorsPick/>
    </>
  );
}
  