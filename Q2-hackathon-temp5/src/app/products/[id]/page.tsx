"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import SaleHeader from "@/app/components/SaleHeader";
import StarRating from "@/app/components/StarRating";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";

const items = [
  { pic: "/productPage/p1.png" },
  { pic: "/productPage/p2.png" },
  { pic: "/productPage/p3.png" },
  { pic: "/productPage/p4.png" },
];

// Define a TypeScript interface for the product
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Props {
  params: { id: string }; // Dynamic route parameters from Next.js
}

export default function ProductDetail({ params }: Props): JSX.Element {
  const { id } = params; // Extract `id` from the route's dynamic parameters
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch the product details based on the `id`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Fetch the JSON file
        const data: Product[] = await response.json();

        // Find the product by ID
        const productDetail = data.find((item) => item.id === parseInt(id, 10));
        setProduct(productDetail || null); // Update state with the found product
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return (
      <>
        <SaleHeader />
        <Header />
        <div className="flex justify-center items-center bg-gray-100 py-6">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <SaleHeader />
      <Header />
      <div className="flex justify-center items-center bg-gray-100 py-6">
        <p>Home</p> <img src="/down.png" alt="" className="-rotate-90 w-6" />{" "}
        <p>Shop</p>
      </div>
      <div className="flex flex-col gap-6 bg-gray-100 lg:flex-row pb-10 lg:pl-20">
        <div className="w-full lg:w-[30%]">
          <img id="c" src={product.image} alt="" className="m-auto" />
        </div>

        <div className="w-full flex flex-col gap-2 pl-8 pb-20">
          <h1 className="text-xl font-semibold">Floating Phones</h1>
          <div className="flex gap-3 items-center">
            <StarRating />
            <p className="font-semibold text-gray-600">10 Reviews</p>
          </div>
          <h1 className="text-3xl font-bold">$1,139.33</h1>
          <div className="flex gap-4">
            <p className="font-semibold text-gray-600 text-sm">Availability:</p>
            <p className="font-semibold text-blue-500 text-sm">In Stock</p>
          </div>
          <br />
          <p className="text-gray-500 text-sm font-semibold lg:w-96">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="border-gray-800 mr-20 w-[80%] my-4" />
          <img
            src="/bestSeller/product-colors.png"
            alt="Product Colors"
            className="w-40"
          />
          <br />
          <div className="flex gap-4">
            <button className="bg-blue-500 p-3 text-white rounded">
              Select Options
            </button>
            <div className="flex gap-2 justify-center items-center">
              <img
                src="/productPage/heart.png"
                alt="Wishlist"
                className="rounded-full bg-white h-8 p-1"
              />
              <img
                src="/productPage/cart.png"
                alt="Add to Cart"
                className="rounded-full bg-white h-8 p-1"
              />
              <img
                src="/productPage/view.png"
                alt="Quick View"
                className="rounded-full bg-white h-8 p-1"
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
      <hr className="w-4/5 border-black m-auto" />
      <br />

      <div className="mx-10 text-gray-500 font-semibold lg:flex gap-8 mt-6">
        <img
          src="/productPage/quickFox.png"
          alt=""
          className="pt-2 m-auto rounded shadow-slate-600 shadow-md mb-20 md:w-[600px] lg:w-[300px] lg:h-[350px] lg:m-auto xl:w-[550px] xl:h-[450px] xl:m-0 xl:ml-20"
        />
        <div className="flex flex-col gap-6 mb-16 lg:w-[300px]">
          <h1 className="text-2xl text-black font-bold mb-10 md:text-center">
            The quick fox jumps over
          </h1>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>

        <div>
          <div className="flex flex-col gap-3 mb-8 md:justify-center md:items-center">
          <h1 className="text-2xl text-black font-bold mb-10 md:text-center">
            The quick fox jumps over
          </h1>
          <p>the quick fox jumps over the lazy dog</p>
          <p>the quick fox jumps over the lazy dog</p>
          <p>the quick fox jumps over the lazy dog</p>
          <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex flex-col gap-3 mb-8 md:justify-center md:items-center">
          <h1 className="text-2xl text-black font-bold mb-10 md:text-center">
            The quick fox jumps over
          </h1>
          <p>the quick fox jumps over the lazy dog</p>
          <p>the quick fox jumps over the lazy dog</p>
          <p>the quick fox jumps over the lazy dog</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <h1 className="text-2xl text-black font-bold text-center pt-16 pb-10">
          BESTSELLER PRODUCTS
        </h1>
        <hr className="w-4/5 border-black m-auto" />
        <br />
        <div className="flex justify-center flex-col items-center lg:flex-row max-xl:gap-4 gap-2 lg:">
          {items.map((i, index) => (
            <Link key={index} href={`products`}>
              <div className="overflow-hidden bg-white cursor-pointer hover:-translate-y-2 transition-all relative mb-20 ">
                <div>
                  <img
                    src={`${i.pic}`}
                    alt=""
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
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
