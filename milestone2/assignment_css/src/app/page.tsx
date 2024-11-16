import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="homepage">
        <div id="homepage-banner">
          <h1 className="my-portfolio">MY PORTFOLIO</h1>
          <br />
          <br /><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil, nisi consequuntur ex cumque accusantium recusandae modi reprehenderit, aperiam aspernatur commodi numquam! Quam dolorum eveniet modi veritatis consequuntur minima voluptatum.</p>
        </div>
        <img id="homepage-pic" src="/me.jpg" alt="" />
      </div>
    </>
  );
}
