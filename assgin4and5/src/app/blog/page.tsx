import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
    return(
        <div>
            <Header/>
            <br /><br />
            <h1 className="center">WRITE A BLOG</h1>
            <br /><br />
            <div id="text">

                <form action="">
                    <label htmlFor="">Enter Title:</label><br />
                    <input className="bar" type="text" />
                        <br /><br />
                    <label htmlFor="">Enter Text:</label><br />
                    <input className="bar" type="text" />
                </form>
            </div>
            <br />
            <br />
            <br /><br /><br /><br />
            <Footer/>
        </div>
    )
}