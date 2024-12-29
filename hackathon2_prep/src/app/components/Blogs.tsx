
import Link from "next/link";
export default function Blogs() {
  const blogData: string[] = [
    "/blog/1.png",
    "/blog/2.png",
    "/blog/3.png",
    "/blog/4.png",
    "/blog/5.png",
    "/blog/6.png",
  ];
  return (
    <>
      <div className="mt-24">
        <div className="text-gray-500 flex flex-col justify-center items-center mb-24 lg:h-fit">
          <p className="text-sm text-blue-600 font-semibold">Practice Advice</p>
          <p className="text-[40px] w-[240px] text-center font-bold   lg:text-[45px] lg:w-[450px] text-gray-800">
            Featured Products
          </p>
          <p className="text-lg font-semibold w-[260px] text-center mt-4   lg:w-[300px]">
            Problems trying to resolve the conflict between the two major
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
          {blogData.map((item, index) => (
            <div
              key={index}
              className="mx-8 my-2 shadow-md text-gray-500 w-[300px] md:w-[450px] lg:w-[300px] lg:mx-4 bg-slate-50 hover:-translate-y-2 xl:mx-10"
            >
              <img src={`${item}`} alt="images" className="md:m-auto pt-5"/>

              <div className="p-4">
                <div className="flex gap-2 text-sm my-3  font-semibold">
                  <p className="text-blue-600">Google</p>
                  <p>Trending</p>
                  <p>New</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-700 mb-2">
                    Loudest à la Madison #1 (L&apos;integral)
                  </p>
                  <p>
                    We focus on ergonomics and meeting you where you work.
                    It&apos;s only a keystroke away.
                  </p>
                  <div className="flex justify-between w-full mt-4">
                    <div className="flex">
                      <img src="/clock.png" alt="" className="h-5" />
                      <p>22 April 2021</p>
                    </div>
                    <div className="flex">
                      <img src="/comments.png" alt="" className="h-5" />
                      <Link href="">Comments</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>  
    </>
  );
}