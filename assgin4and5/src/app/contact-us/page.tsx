import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Contact_Page() {
  return (
    <div>
      <Header />
      <br />
      <br /><br />
      <h1 id="contactHeading">CONTACT INFORMATION</h1>
      <br /><br />
      <div id="contact">        
        <div id="address">
          <img src="/address.png" alt="" /> <h1>ADDRESS</h1>
          <br />
          <a href="https://www.google.com/maps/place/Gulshan+e+Iqbal+block+6/@24.9266718,67.0925361,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33979e54ea8db:0xeaeaae936369291d!8m2!3d24.926667!4d67.095111!16s%2Fg%2F11swvjgwcb?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">Block 6, Gulshan-e-Iqbal, Karachi, 75300, Pakistan.</a>
        </div>
        <div id="call">
          <img src="/phone.png" alt="" /> <h1>PHONE</h1>
          <br />
          <h2>Whatsapp</h2>
          <ul>
            <li>0301-1234567</li> 
            <li>0302-9876543</li>
          </ul>
          <hr />
          <br />
          <h2>Telephone</h2>
          <ul>
            <li>0303-4567890</li> 
            <li>0305-1122334</li>
          </ul>
        </div>

        <div id="email">
          <img src="/email.png" alt="" /> <h1>EMAIL</h1>
          <br />
          <ul>
            <li>contact@blogermen.com</li>
            <li>info.blogermen@gmail.com</li>
          </ul>
        </div>
      </div>
      <br /><br />
      <Footer/>
    </div>
  );
}
