import Link from "next/link"

export default function Navbar() {
    return(
        <div>
        <nav className="navbar">
    <div className="logo">
      <Link href="/">Abdul Hadi Faisal</Link>
    </div>
    <ul className="navbarLinks">
      <li><Link href="/">Home</Link></li>
      <li><Link href="about-me">About Me</Link></li>
      <li><Link href="">Projects</Link></li>
      <li><Link href="">Skills</Link></li>
      <li><Link href="">Services</Link></li>
      <li><Link href="">Contact</Link></li>
    </ul>
  </nav>
  </div>
    )
}