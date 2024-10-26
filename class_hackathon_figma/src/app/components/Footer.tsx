import Link from "next/link";

export default function Footer() {
    return (
      <div id="blackbg">
        <div id="footer">
          <div id="cyber">
            <h2><b>cyber</b></h2>
            <br />
            <p>We are an electronics and gadgets firm located in Portland. Our studio offers more than just quality.</p>
          </div>
          <div className="footerDivs" id="services">
            <h2>Services</h2>
            <ul>
              <Link href={"/"}><li>Bonus Program</li></Link>
              <Link href={"/"}><li>Gift Cards</li></Link>
              <Link href={"/"}><li>Credit and Payment</li></Link>
              <Link href={"/"}><li>Service Contracts</li></Link>
              <Link href={"/"}><li>Non-cash Account</li></Link>
              <Link href={"/"}><li>Payment</li></Link>
            </ul>
          </div>
          <div className="footerDivs" id="assisstance">
            <h2>Assisstance to the buyer</h2>
            <ul>
              <Link href={"/"}><li>Find an Order</li></Link>
              <Link href={"/"}><li>Terms of Delivery</li></Link>
              <Link href={"/"}><li>Exchange and Return of Goods</li></Link>
              <Link href={"/"}><li>Guarantee</li></Link>
              <Link href={"/"}><li>Frequently asked questions</li></Link>
              <Link href={"/"}><li>Terms of use of the site</li></Link>
            </ul>
          </div>
        </div>
        <br />
        <div id="footerIcons">
          <Link href={"/"}><img className="madesmaller" src="/footer-icons/twitter.png" alt="" /></Link>
          <Link href={"/"}><img className="madesmaller" src="/footer-icons/fb.png" alt="" /></Link>
          <Link href={"/"}><img src="/footer-icons/tiktok.png" alt="" /></Link>
          <Link href={"/"}><img src="/footer-icons/insta.png" alt="" /></Link>
        </div>
      </div>
    );
  }
  