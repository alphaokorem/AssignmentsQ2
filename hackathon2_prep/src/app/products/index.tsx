import Link from "next/link";
import Header from "@/app/components/Header";
import SaleHeader from "@/app/components/SaleHeader";
import StarRating from "@/app/components/StarRating";
import Footer from "@/app/components/Footer";
// import { products } from "@/app/components/Products";

const items = [
  {pic : "/productPage/p1.png"},
  {pic : "/productPage/p2.png"},
  {pic : "/productPage/p3.png"},
  {pic : "/productPage/p4.png"},
]

export default function ItemDetail() {
  return (
    <>
      <SaleHeader />
      <Header />

      <div className="flex flex-col gap-6 bg-slate-200">
        <div className="w-full">
          <img id="c" src="" alt="" />
          <div>
            <Link href={`c`}></Link>
            <Link href={`d`}></Link>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 pl-8 pb-20">
          <h1 className="text-2xl font-semibold">Floating Phone</h1>
          <div className="flex gap-3 items-center">
            {" "}
            <StarRating />{" "}
            <p className="font-semibold text-gray-600 ">10 Reviews</p>
          </div>
          <h1 className="text-3xl font-bold">$1,139.33</h1>
          <div className="flex gap-4">
            <p className="font-semibold text-gray-600 text-sm">
              {" "}
              Availability :
            </p>
            <p className="font-semibold text-blue-500 text-sm">In Stock </p>
          </div>
          <br />
          <p className="font-semibold text-gray-500 w-[80%]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="border-gray-800 mr-20 w-[80%] my-4" />
          <img src="/bestSeller/product-colors.png" alt="" className="w-40" />
          <br />
          <div className="flex gap-4">
            <button className="bg-blue-500 p-3 text-white rounded">
              Select Options
            </button>
            <div className="flex gap-2 justify-center items-center">
              <img
                src="/productPage/heart.png"
                alt=""
                className=" rounded-full bg-white h-8 p-1"
              />
              <img
                src="/productPage/cart.png"
                alt=""
                className=" rounded-full bg-white h-8 p-1"
              />
              <img
                src="/productPage/view.png"
                alt=""
                className=" rounded-full bg-white h-8 p-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 justify-center py-8">
        <p className="font-semibold text-gray-500 underline-offset-2">
          Description
        </p>
        <p className="font-bold text-gray-500">Additional Information</p>
      </div>
      <hr className="w-4/5 border-black m-auto" /> <br />
      <div className="mx-10 text-gray-500 font-semibold lg:flex gap-8">
        <img
          src="/productPage/quickFox.png"
          alt=""
          className="pt-2 m-auto rounded shadow-slate-600  shadow-md mb-20 md:w-[600px] lg:w-[250px] lg:h-[350px] lg:m-auto xl:w-[550px] xl:h-[450px] xl:m-0 xl:ml-20"
        />
        <div className="mb-16 lg:w-[300px]">
          <h1 className="text-2xl text-black font-bold mb-10">
            the quick fox jumps over
          </h1>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p><br />
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p> <br />
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p> <br />
        </div>

        <div>
        <div>
          <h1 className="text-2xl text-black font-bold mb-10">
            the quick fox jumps over{" "}
          </h1>
          <ul>
            <li>the quick fox jumps over the lazy dog</li> <br />
            <li>the quick fox jumps over the lazy dog</li><br />
            <li>the quick fox jumps over the lazy dog</li><br />
            <li>the quick fox jumps over the lazy dog</li><br />
          </ul>
        </div>

        <div>
          <h1 className="text-2xl text-black font-bold mb-10">
            the quick fox jumps over{" "}
          </h1>
          <ul>
            <li>the quick fox jumps over the lazy dog</li> <br />
            <li>the quick fox jumps over the lazy dog</li><br />
            <li>the quick fox jumps over the lazy dog</li><br />
          </ul>
        </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <h1 className="text-2xl text-black font-bold text-center pt-16 pb-10">BESTSELLER PODUCTS</h1>
        <hr className="w-4/5 border-black m-auto" />
        <br />
        <div className="flex flex-wrap justify-center items-center max-xl:gap-4 gap-2">
            
              {items.map((i, index) => (
                <Link href={`products`}>
                <div key={index} className="overflow-hidden mx-auto aspect-w-16 aspect-h-8 bg-white  cursor-pointer hover:-translate-y-2 transition-all relative mb-20">
                    <div >
                      <img
                        src={`${i.pic}`}
                        alt="Product 1"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <br />
                    <div className="pl-3 pb-5">
                      <h3 className="text-lg font-extrabold text-gray-800">
                        Graphic Design
                      </h3>
                      <p className="text-gray-600 mt-2 font-bold">
                        English Department
                      </p>
                      <h4 className="text-lg text-gray-800 font-bold mt-4">
                        $16.48 <span className="text-green-700">$6.48</span>
                      </h4>
                    </div>
                </div> </Link>
              ))}
            </div>
      </div>

      <Footer/>
    </>
  );
}
