import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div id="header">
      <ul className="navbar">

        <li id="icon">
          <Image src="/book.png" alt="" /> The Blogermen
          <div id="hidden">
            <ul>
              <Link href={"/"}><li> <Image src="/home.png" alt="home icon" />Home</li></Link>
              <Link href={"blog"}><li> <Image src="/blog.png" alt="blog icon" />Write a blog</li></Link>
              <Link href={"about-us"}><li> <Image src="/aboutus.png" alt="about us icon" />About Us</li></Link>
              <Link href={"contact-us"}><li> <Image src="/phone.png" alt="phone icon" />Contact Us</li></Link>
            </ul>
          </div>
        </li>


        <Link href={"/"}>
          <li>
            {" "}
            <Image src="/home.png" alt="home icon" /> Home
          </li>
        </Link>
        <Link href={"about-us"}>
          <li>
            {" "}
            <Image src="/aboutus.png" alt="about us icon" /> About Us
          </li>
        </Link>
      </ul>
    </div>
  );
}
