
import Link from "next/link";
export default function SaleHeader() {
  return (
    <>
      <div className="hidden headerBar lg:flex justify-evenly lg:justify-between">
        <div className="flex gap-4 py-2.5 ml-10">
          <div className="flex gap-1"><img src="/contact.png" alt="" className="h-5"/><p className="text-white text-sm" >(225) 555-0118</p></div>
          <div className="flex gap-1"><img src="/mail.png" alt="" className="h-5"/><p className="text-white text-sm">michelle.rivera@example.com</p></div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <p className="text-sm text-white text-center w-56 sm:w-fit sm:py-2">
          Follow Us  and get a chance to win 80% off
          </p>
        </div>

        <div className="px-3 py-2.5 text-white text-sm outline-none flex mr-10">
            Follow Us :
            <div className="flex gap-3 ml-3">
              <Link href={"https://www.instagram.com"}> <img src="/insta.png" alt="instagram" /> </Link>
              <Link href={"/"}> <img src="/yt.png" alt="youtube" /> </Link>
              <Link href={"/"}> <img src="/fb.png" alt="facebook" /> </Link>
              <Link href={"/"}> <img src="/twitter.png" alt="twitter" /> </Link>
            </div>
        </div>
      </div>
    </>
  );
}
