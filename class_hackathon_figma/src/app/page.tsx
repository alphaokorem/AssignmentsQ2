import Header from "./components/Header";
import Banner from "./components/banner";
import SmallBanners from "./components/smallbanners";
import Categories from "./components/Categories";
import Products from "./components/Products";
import LongBanners from "./components/LongBanners";
import Discounted from "./components/Discounted";
import Sale from "./components/Sale";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div id="home">
      <Header />
      <Banner />
      <SmallBanners />
      <Categories />

      <br />
      <br />
      <br />
      <br />

      <Products/>
      <br />
      <LongBanners/>
      <br />
      <br />
      <br />

      <Discounted/>
      <br />
      <Sale/>
      <Footer/>
      
    </div>
  );
}
