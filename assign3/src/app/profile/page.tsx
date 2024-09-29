import Header from "/AssignmentsQ2/assign3/src/app/components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div id="prof">
        <h1>Abdul Hadi Faisal</h1>
        <h2>
          Front-end Developer studying at GIAIC, exploring AI, MetaVerse and
          Blockchain
        </h2>
        <h4>May look older, but I am 19 years old</h4>
      </div>
      <img id="pic" src="/me.jpg" alt="my pic" />
      <Footer></Footer>
    </div>
  );
}
