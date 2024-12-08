import Link from "next/link"

export default function EditorsPick() {
    return(
        <>
        <div className="flex flex-col justify-center items-center p-8">
            <p className="text-[25px] font-bold mt-14">EDITOR&apos;S PICK</p>
            <p className="font-bold text-gray-500 w-[200px] lg:w-auto  text-center my-4">Problems trying to resolve 
            the conflict between </p>
        </div>
        <div className="flex justify-center items-center mx-10 gap-6 flex-wrap xl:mx-32">
            <Link href="/"><img src="/editorsPick/men.png" alt="" className=""/> Men</Link>
            <Link href="/"><img src="/editorsPick/women.png" alt="" className="w-72"/></Link>
            <Link href="/"><img src="/editorsPick/accessories.png" alt="" /></Link>
            <Link href="/"><img src="/editorsPick/kids.png" alt="" /></Link>
        </div>
        </>
    )
}