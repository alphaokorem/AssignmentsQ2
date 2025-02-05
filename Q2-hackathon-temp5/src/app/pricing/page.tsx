import Image from "next/image";
import Header from "../components/Header";
import Toggle from "../components/Toggle";
import PricingFooter from "../components/pricingPage/PricingFooter";

export default function PricingPage() {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-4 justify-center items-center mt-10">
                <h2 className="font-semibold text-gray-500">PRICING</h2>
                <h1 className="text-3xl font-bold lg:text-5xl">Simple Pricing</h1>
                <div className="flex justify-center items-center">
                    <p className="font-bold text-sm ">Home</p>
                    <img src="/rightgray.png" alt="" className="w-6" />
                    <p className="font-bold text-sm text-gray-500">Pricing</p>
                </div>
            </div>

            <div className="mt-10 bg-gray-100 flex flex-col justify-center items-center pt-12 pb-12">
                <h1 className="text-3xl font-bold xl:text-5xl">Pricing</h1>
                <br />
                <p className="text-sm font-bold text-gray-500 w-4/5 text-center md:w-1/2 lg:w-[450px]">
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics{" "}
                </p>
                <br />
                <br />
                <div className="font-bold flex gap-5 ">
                    <div className="flex justify-center items-center gap-2">
                        <p>Monthly</p>
                        <Toggle />
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <p>Yearly</p>
                        <button className="rounded-full bg-blue-300 px-4 py-3 text-sm text-blue-700 font-bold">
                            Save 25%
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`bg-gray-100 flex flex-col justify-center items-center gap-12 lg:flex-row lg:gap-0 lg:px-20 lg:pt-20 `}
            >
                <div
                    id="card1"
                    className={`flex flex-col justify-center items-center bg-white mx-6  border border-blue-500 py-8 lg:mx-0 lg:rounded-xl md:w-[500px] hover:scale-105 hover:border-4 `}
                >
                    <h2 className="text-2xl font-bold">FREE</h2>
                    <br />
                    <p className="font-bold text-gray-500 text-center w-[180px]">
                        Organize across all apps by hand
                    </p>
                    <br />
                    <div className="flex gap-2">
                        <p className="text-5xl font-bold text-blue-500">0</p>
                        <div>
                            <p className="text-blue-500 font-bold text-lg">$</p>
                            <p className="text-sm text-blue-500">Per Month</p>
                        </div>
                    </div>
                    <br />
                    <ul className="flex flex-col justify-center ml-4 gap-3">
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-gray-400 p-1 h-8 rounded-full"
                            />
                            1GB Cloud Storage
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800 w-[250px] md:w-full">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-gray-400 p-1 h-8 rounded-full"
                            />
                            Email And Community support
                        </li>
                    </ul>
                    <br />
                    <button className="text-white bg-blue-500 py-2 px-16 rounded">
                        Try for free
                    </button>
                </div>

                <div
                    id="card2"
                    className="flex flex-col justify-center items-center bg-black text-white mx-6 border border-blue-500 py-8 lg:mx-0 lg:rounded-xl md:w-[500px] hover:scale-105 animate-in duration-75 hover:border-4 lg:-translate-y-8 "
                >
                    <h2 className="text-2xl font-bold">STANDARD</h2>
                    <br />
                    <p className="font-bold text-white text-center w-[180px]">
                        Organize across all apps by hand
                    </p>
                    <br />
                    <div className="flex gap-2">
                        <p className="text-5xl font-bold text-blue-500">9.99</p>
                        <div>
                            <p className="text-blue-500 font-bold text-lg">$</p>
                            <p className="text-sm text-blue-500">Per Month</p>
                        </div>
                    </div>
                    <br />
                    <ul className="flex flex-col justify-center ml-4 gap-3">
                        <li className="flex justify-start items-center gap-4 font-semibold text-white">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-white">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-white">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-white">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-gray-400 p-1 h-8 rounded-full"
                            />
                            1GB Cloud Storage
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-white w-[250px] md:w-full">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-gray-400 p-1 h-8 rounded-full"
                            />
                            Email And Community support
                        </li>
                    </ul>
                    <br />
                    <button className="text-white bg-blue-500 py-2 px-16 rounded">
                        Try for free
                    </button>
                </div>

                <div
                    id="card3"
                    className="flex flex-col justify-center items-center bg-white mx-6 border border-blue-500 py-8 lg:mx-0 lg:rounded-xl md:w-[500px] hover:scale-105 animate-in duration-75 hover:border-4"
                >
                    <h2 className="text-2xl font-bold">PREMIUM</h2>
                    <br />
                    <p className="font-bold text-gray-500 text-center w-[180px]">
                        Organize across all apps by hand
                    </p>
                    <br />
                    <div className="flex gap-2">
                        <p className="text-5xl font-bold text-blue-500">19.99</p>
                        <div>
                            <p className="text-blue-500 font-bold text-lg">$</p>
                            <p className="text-sm text-blue-500">Per Month</p>
                        </div>
                    </div>
                    <br />
                    <ul className="flex flex-col justify-center ml-4 gap-3">
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-green-600 p-1 h-8 rounded-full"
                            />
                            Unlimited product updates
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-gray-400 p-1 h-8 rounded-full"
                            />
                            1GB Cloud Storage
                        </li>
                        <li className="flex justify-start items-center gap-4 font-semibold text-gray-800 w-[250px] md:w-full">
                            {" "}
                            <img
                                src="/tickmark.png"
                                alt=""
                                className="bg-gray-400 p-1 h-8 rounded-full"
                            />
                            Email And Community support
                        </li>
                    </ul>
                    <br />
                    <button className="text-white bg-blue-500 py-2 px-16 rounded">
                        Try for free
                    </button>
                </div>
            </div>

            <div className="font-semibold text-gray-800 text-center text-xl bg-gray-100 pt-24">
                Trusted By Over 400 Big Companies
            </div>
            <div className="bg-slate-100 flex flex-col justify-evenly items-center h-[1200px] pb-24 lg:flex-row lg:h-[300px]">
                <Image
                    src={"/footerLogos/hooli.png"}
                    alt=""
                    width={135}
                    height={135}
                ></Image>
                <Image
                    src={"/footerLogos/lyft.png"}
                    alt=""
                    width={135}
                    height={135}
                ></Image>
                <Image
                    src={"/footerLogos/cap.png"}
                    alt=""
                    width={135}
                    height={135}
                ></Image>
                <Image
                    src={"/footerLogos/Vector.png"}
                    alt=""
                    width={135}
                    height={135}
                ></Image>
                <Image
                    src={"/footerLogos/aws.png"}
                    alt=""
                    width={135}
                    height={135}
                ></Image>
                <Image
                    src={"/footerLogos/reddit.png"}
                    alt=""
                    width={135}
                    height={135}
                ></Image>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 py-24">
                <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                    Pricing FAQs
                </h1>
                <p className="text-sm text-gray-500 text-center font-bold w-72 md:w-80 ">
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics
                </p>
            </div>

            <div className="mx-4 flex flex-col gap-12 md:mx-20 lg:mx-4 lg:flex-row lg:flex-wrap lg:justify-center">
                <div className="flex items-start lg:w-96">
                    <img src="/rightgray.png" alt="" className="h-8" />{" "}
                    <div>
                        <h2 className="text-lg font-bold">
                            the quick fox jumps over the lazy dog
                        </h2>{" "}
                        <br />{" "}
                        <p className="font-bold text-gray-500">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met
                            sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                            venial consequent sent nostrum met.
                        </p>
                    </div>
                </div>
                <div className="flex items-start lg:w-96">
                    <img src="/rightgray.png" alt="" className="h-8" />{" "}
                    <div>
                        <h2 className="text-lg font-bold">
                            the quick fox jumps over the lazy dog
                        </h2>{" "}
                        <br />{" "}
                        <p className="font-bold text-gray-500">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met
                            sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                            venial consequent sent nostrum met.
                        </p>
                    </div>
                </div>
                <div className="flex items-start lg:w-96">
                    <img src="/rightgray.png" alt="" className="h-8" />{" "}
                    <div>
                        <h2 className="text-lg font-bold">
                            the quick fox jumps over the lazy dog
                        </h2>{" "}
                        <br />{" "}
                        <p className="font-bold text-gray-500">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met
                            sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                            venial consequent sent nostrum met.
                        </p>
                    </div>
                </div>
                <div className="flex items-start lg:w-96">
                    <img src="/rightgray.png" alt="" className="h-8" />{" "}
                    <div>
                        <h2 className="text-lg font-bold">
                            the quick fox jumps over the lazy dog
                        </h2>{" "}
                        <br />{" "}
                        <p className="font-bold text-gray-500">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met
                            sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                            venial consequent sent nostrum met.
                        </p>
                    </div>
                </div>
                <div className="flex items-start lg:w-96">
                    <img src="/rightgray.png" alt="" className="h-8" />{" "}
                    <div>
                        <h2 className="text-lg font-bold">
                            the quick fox jumps over the lazy dog
                        </h2>{" "}
                        <br />{" "}
                        <p className="font-bold text-gray-500">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met
                            sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                            venial consequent sent nostrum met.
                        </p>
                    </div>
                </div>
                <div className="flex items-start lg:w-96">
                    <img src="/rightgray.png" alt="" className="h-8" />{" "}
                    <div>
                        <h2 className="text-lg font-bold">
                            the quick fox jumps over the lazy dog
                        </h2>{" "}
                        <br />{" "}
                        <p className="font-bold text-gray-500">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met
                            sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                            venial consequent sent nostrum met.
                        </p>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="flex justify-center items-center mt-20 mb-40">
                <h1 className="text-center text-gray-500 font-bold text-xl w-[250px] md:w-full">
                    Haven&apos;t got your answer? Contact our support
                </h1>
            </div>


            <PricingFooter />
        </>
    );
}
