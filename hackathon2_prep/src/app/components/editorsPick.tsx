import React from "react"
import Link from "next/link"

export default function EditorsPick() {
    return(
        <>
        <div className="flex flex-col justify-center items-center p-8 bg-slate-100">
            <p className="text-[25px] font-bold mt-14">EDITOR&apos;S PICK</p>
            <p className="font-bold text-gray-500 w-[200px] lg:w-auto  text-center my-4">Problems trying to resolve 
            the conflict between </p>
        </div>
        <div className="flex justify-center items-center px-10 gap-6 flex-wrap xl:px-32 bg-slate-100">
            <Link href="/" className="hover:scale-105 transition duration-700"><img src="/editorsPick/men.png" alt="" className="w-[240px] sm:w-auto hover:shadow-2xl shadow-black"/><button className="relative translate-x-12 -translate-y-20 bg-white text-black w-48 h-12 font-bold">Men</button></Link>
            <Link href="/" className="hover:scale-105 transition duration-700"><img src="/editorsPick/women.png" alt="" className="hover:shadow-2xl shadow-black"/><button className="relative translate-x-12 -translate-y-20 bg-white text-black w-44 h-12 font-bold">Women</button></Link>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-8 lg:gap-0">
            <Link href="/" className="hover:scale-105 transition duration-700"><img src="/editorsPick/accessories.png" alt="" className="hover:shadow-2xl shadow-black" /><button className="relative translate-x-12 -translate-y-20 bg-white text-black w-44 h-8 font-bold">Accessories</button></Link>
            <Link href="/"className="hover:scale-105 transition duration-700"><img src="/editorsPick/kids.png" alt="" className="lg:-translate-y-4 md:-translate-y-0 hover:shadow-2xl shadow-black"/><button className="relative translate-x-12 -translate-y-20 bg-white text-black w-44 h-8 font-bold">Kids</button></Link></div>
        </div>
        </>
    )
}