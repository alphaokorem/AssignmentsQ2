import Link from "next/link";

export default function Footer() {
  return (
    <div className="foot">
      <ul className="list">
        <Link href={"terms"}>
          <li className="li">Terms of Service</li>
        </Link>
        <Link href={"privacy-policy"}>
          <li className="li">Privacy Policy</li>
        </Link>
        <ul id="contactlist">
          <h4>Contact Info</h4>
          <li>Phone: 082181721</li>
          <li>E-mail: imaginarycompany@gmail.com</li>
          <li>Address: Imaginary Street, Karachi</li>
        </ul>
      </ul>
      <br />
      <br />
      <h4 id="cpr">Copyright @ All rights reserved</h4>
    </div>
  );
}
