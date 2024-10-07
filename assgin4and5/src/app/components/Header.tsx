import Link from "next/link";

export default function Header() {
  return (
    <div id="header">
      <ul className="navbar">

        <li id="icon">
          <img src="/book.png" alt="" /> The Blogermen
          <div id="hidden">
            <ul>
              <Link href={"/"}><li> <img src="/home.png" alt="home icon" />Home</li></Link>
              <Link href={"blog"}><li> <img src="/blog.png" alt="blog icon" />Write a blog</li></Link>
              <Link href={"about-us"}><li> <img src="/aboutus.png" alt="about us icon" />About Us</li></Link>
              <Link href={"contact-us"}><li> <img src="/phone.png" alt="phone icon" />Contact Us</li></Link>
            </ul>
          </div>
        </li>


        <Link href={"/"}>
          <li>
            {" "}
            <img src="/home.png" alt="home icon" /> Home
          </li>
        </Link>
        <Link href={"about-us"}>
          <li>
            {" "}
            <img src="/aboutus.png" alt="about us icon" /> About Us
          </li>
        </Link>
      </ul>
    </div>
  );
}
