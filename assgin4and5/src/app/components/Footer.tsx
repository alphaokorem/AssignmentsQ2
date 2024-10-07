import Link from "next/link";

export default function Footer() {
    return(
        <div id="footer">
            <br /><br />
            <ul className="endbar">
                <Link href={"policy"}><li>Privacy Policy</li></Link>
                <Link href={"terms"}><li>Terms and Conditions</li></Link>
                <Link href={"contact-us"}><li>Contact Us</li></Link>
            </ul>
            <br /> <br />
            <ul className="copy">
                <li>Copyright@2024</li>
                <li>All rights reserved</li>
            </ul>
        </div>
    )
}