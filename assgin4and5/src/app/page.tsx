import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <h1 className="center">
        &apos;AT BLOGERMEN&apos;S, WE WRITE TO OUR HEART&apos;S CONTENT&apos;
      </h1>
      <br />
      <div id="categories">
        <div className="cards">
          <img src="/creep.jpeg" alt="" />
          <br />
          <h1>Creepy Pasta</h1>
          <p>
            It was just a game, they said. Something fun to play with friends
            online. But after I logged off, the whispers followed me. I could
            hear them in my room, in the dark, right behind me...
          </p>
          <br />
          <button>
            {" "}
            <Link href={"creepypasta"}>Read More</Link>
          </button>
        </div>
        <div className="cards">
          <img src="/hiking.jpeg" alt="" />
          <br />
          <h1>Hiking</h1>
          <p>
            The trail was quiet, save for the rustle of leaves beneath my boots.
            As I climbed higher, the trees thinned, giving way to vast,
            untouched wilderness.
          </p>  
          <br />
          <button>
            {" "}
            <Link href={"hiking"}>Read More</Link>
          </button>
        </div>
        <div className="cards">
          <img src="/mental.png" alt="" />
          <br />
          <h1>Mental Health Problems</h1>
          <p>
            Sometimes, it felt like trying to climb a mountain with no summit.
            The weight of invisible struggles pulled me down, and every step
            forward felt like a battle.
          </p>
          <br />
          <button>
            <Link href={"mental"}>Read More</Link>
          </button>
        </div>
        <div className="cards">
          <img src="/pjj.jpg" alt="" />
          <br />
          <h1>Percy Jackson</h1>
          <p>
            Percy discovers he&apos;s a
            demigod, the son of Poseidon, and embarks on a series of dangerous
            quests alongside his friends. The
            series blends Greek mythology with modern adventure....
          </p>
          <br />
          <button>
            <Link href={"percy"}>Read More</Link>
          </button>
        </div>
        <div className="cards">
          <img src="/inflat.jpg" alt="" />
          <div className="info">
            <br />
            <h1>Inflation in Pakistan</h1>
            <p>
              Inflation in Pakistan has been a persistent challenge,
              significantly impacting the daily lives of its citizens. Rising
              prices of essential goods, including food, fuel, and utilities,...
            </p>
            <br />
          </div>
          <button>
            <Link href={"inflation"}>Read More</Link>
          </button>
        </div>
        <div className="cards">
          <img src="/remote.jpeg" alt="" />
          <br />
          <h1>The Future of Remote Work</h1>
          <p>
            The COVID-19 pandemic accelerated the shift to remote work, but is
            it here to stay? Let us explore the long-term trends
            influencing the future of work, such as digital collaboration tools,
            AI-driven productivity software, and...
          </p>
          <br />
          <button>
            <Link href={"future"}>Read More</Link>
          </button>
        </div>
        <div className="cards">
          <img src="/coffee.webp" alt="" />
          <br />
          <h1>Coffee Lovers</h1>
          <p>
            Whether enjoyed in the quiet of a morning routine or shared in
            lively conversation with friends, coffee has a way of bringing
            people together.
          </p>
          <br />
          <button>
            <Link href={"coffee"}>Read More</Link>
          </button>
        </div>
        <div className="cards">
          <img src="/musk.jpeg" alt="" />
          <br />
          <h1>Gigafactory of compute</h1>
          <p>
            Elon Musk has announced plans to build a large-scale supercomputer,
            &apos;gigafactory of compute&apos;, to support his artificial
            intelligence startup, xAI.
          </p>
          <br />
          <button>
            <Link href={"musk"}>Read More</Link>
          </button>
        </div>
      </div>
      <br />
      <br />
      <p id="closing">
        &apos;At Blogermen, our mission is to empower readers with insightful,
        engaging, and authentic content that sparks curiosity and inspires
        informed decision-making. We strive to build a diverse community of
        thinkers, learners, and creators by delivering high-quality blogs on a
        wide range of topics—from tech and lifestyle to business and
        culture.&apos;
      </p>
      <br />
      <br />
      <Footer />
    </div>
  );
}
