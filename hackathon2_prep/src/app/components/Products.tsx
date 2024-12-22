
import React from "react";
import Link from "next/link";

export const products = [
  { id: 1, image: "/bestSeller/a.png" },
  { id: 2, image: "/bestSeller/b.png"  },
  { id: 3, image: "/bestSeller/c.png"  },
  { id: 4, image: "/bestSeller/d.png"  },
  { id: 5, image: "/bestSeller/1.png"  },
  { id: 6, image: "/bestSeller/2.png"  },
  { id: 7, image: "/bestSeller/3.png"  },
  { id: 8, image: "/bestSeller/4.png"  },
];
export default function Products() {
  return (
    <>
      <div className="font-[sans-serif]">
        <div className="p-4 lg:mx-16 xl:mx-36 lg:max-w-7xl sm:max-w-full">
          <div className="flex flex-wrap justify-center items-center max-xl:gap-4 gap-2">
            
              {products.map((item, index) => (
                <div className="overflow-hidden mx-auto aspect-w-16 aspect-h-8 bg-white  text-center  cursor-pointer hover:-translate-y-2 transition-all relative mb-20">
                  <Link href={`products/${item.id}`} key={index}>
                    <div >
                      <img
                        src={`${item.image}`}
                        alt="Product 1"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <br />
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-800">
                        Graphic Design
                      </h3>
                      <p className="text-gray-600 mt-2 font-bold">
                        English Department
                      </p>
                      <h4 className="text-lg text-gray-800 font-bold mt-4">
                        $16.48 <span className="text-green-700">$6.48</span>
                      </h4>
                      <img
                        src="/bestSeller/product-colors.png"
                        alt=""
                        className="m-auto mt-2"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}
