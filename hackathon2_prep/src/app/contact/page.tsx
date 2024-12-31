import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Conatct() {
    return (
        <>
            <Header />

            <br />


            <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-around">
                <div>
                    <h1 className="text-center font-bold text-sm lg:text-start">CONTACT US</h1>
                    <br />
                    <br />
                    <h1 className="text-3xl font-bold lg:text-5xl">Get in touch today!</h1>
                    <br />
                    <p className="text-gray-500 font-bold w-[280px] text-center lg:text-start">
                        We know how large objects will act, but things on a small scale just
                        do not act that way.
                    </p>
                    <br />
                    <div className="flex flex-col justify-center items-center text-xl font-bold lg:items-start">
                        <p>Phone ; +451 215 215 </p>
                        <br />
                        <p>Fax : +451 215 215</p>
                    </div>
                    <br />
                    <br />
                    <div className="flex gap-8 justify-center items-center lg:gap-0 lg:justify-between lg:w-[250px]">
                        <Link href="https://en.wikipedia.org/wiki/Twitter"><img src="/contact/twitter.png" alt="" /></Link>
                        <div className="bg-[#252B42] pl-3 pr-2 pt-1 ">
                            <Link href={"https://en.wikipedia.org/wiki/Facebook"}><img src="/contact/fb.png" alt="" /></Link>
                        </div>
                        <Link href={"https://en.wikipedia.org/wiki/Instagram"}><img src="/contact/insta.png" alt="" /></Link>
                        <Link href={"https://en.wikipedia.org/wiki/LinkedIn"}><img src="/contact/linkedIn.png" alt="" /></Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <div className="w-full lg:w-auto"><img src="/contact/family1.png" alt="" className="w-full bg-white " /></div></div>


            <div className="bg-gray-100 flex flex-col justify-center items-center pb-20 text-center">
                <div className="pt-16">
                    <h2 className="text-sm font-bold">VISIT OUR OFFICE</h2>
                    <br />
                    <h1 className="text-3xl font-bold mx-20">
                        We help small businesses with big ideas
                    </h1>
                </div>
                <br />
                <br />
                <div className="flex flex-col justify-center items-center lg:flex-row">

                    <br />
                    <br />
                    <br />
                    <div
                        id="1"
                        className="bg-white w-[300px] md:w-[450px]  h-[400px] flex flex-col justify-center items-center py-12 lg:w-[300px]"
                    >
                        <img src="/contact/phone.png" alt="" className="m-auto" />
                        <br />
                        <p className="font-bold text-gray-800 text-sm">
                            georgia.young@example.com
                        </p>
                        <p className="font-bold text-gray-800 text-sm">
                            georgia.young@ple.com
                        </p>
                        <br />
                        <h2 className="text-lg text-gray-800 font-bold">Get Support</h2>
                        <br />
                        <button className="text-sm font-bold text-blue-500 px-3 py-2 border border-blue-500 rounded hover:scale-105">
                            Submit Request
                        </button>
                    </div>
                    <br />
                    <br />
                    <div
                        id="2"
                        className="bg-[#252B42] w-[300px] md:w-[450px]  h-[400px] flex flex-col justify-center items-center py-12 lg:w-[300px]"
                    >
                        <img src="/contact/location.png" alt="" className="m-auto" />
                        <br />
                        <p className="font-bold text-white text-sm">
                            georgia.young@example.com
                        </p>
                        <p className="font-bold text-white text-sm">georgia.young@ple.com</p>
                        <br />
                        <h2 className="text-lg text-white font-bold">Get Support</h2>
                        <br />
                        <button className="text-sm font-bold text-blue-500 px-3 py-2 border border-blue-500 rounded hover:scale-105">
                            Submit Request
                        </button>
                    </div>
                    <br />
                    <br />
                    <div
                        id="3"
                        className="bg-white w-[300px] md:w-[450px] h-[400px] flex flex-col justify-center items-center py-12 lg:w-[300px]"
                    >
                        <img src="/contact/message.png" alt="" className="m-auto" />
                        <br />
                        <p className="font-bold text-gray-800 text-sm">
                            georgia.young@example.com
                        </p>
                        <p className="font-bold text-gray-800 text-sm">
                            georgia.young@ple.com
                        </p>
                        <br />
                        <h2 className="text-lg text-gray-800 font-bold">Get Support</h2>
                        <br />
                        <button className="text-sm font-bold text-blue-500 px-3 py-2 border border-blue-500 rounded hover:scale-105">
                            Submit Request
                        </button>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <div className="flex flex-col justify-center items-center pb-20">
                <img src="/contact/arrow.png" alt="" />
                <p className="font-bold">WE Can&apos;t WAIT TO MEET YOU</p>
                <br />
                <br />
                <h1 className="text-5xl font-bold">Let&apos;s Talk</h1>
                <br />
                <button className="text-white bg-blue-500 rounded py-3 px-6">
                    Try it free now
                </button>
            </div>

            <Footer />
        </>
    );
}
