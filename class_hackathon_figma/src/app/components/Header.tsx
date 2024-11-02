import Link from "next/link";

export default function Header() {
  return (
    <div id="header">

      <div id="headerLogo">
        <Link href={"/"}>
          <img src="/logo/logo.png" alt="website logo" />
        </Link>
      </div>


      <div id="menu">
        <img id="menuIcon" src="/menu.png" alt="" />

        <div id="upperHeader">

          <div id="upperHeaderBar">
            <form action="">
              <input id="searchbar" type="text" placeholder="Search" />
            </form>
          </div>

          <div>
            <ul id="upperHeaderNav">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>Contact Us</Link>
              </li>
              <li>
                <Link href={""}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul id="upperHeaderIcons">
            <li>
              <Link href={""}>
                <img
                  className="headerIcons"
                  src="/header-icons/like.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <img
                  className="headerIcons"
                  src="/header-icons/cart.png"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <img
                  className="headerIcons"
                  src="/header-icons/person.png"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
