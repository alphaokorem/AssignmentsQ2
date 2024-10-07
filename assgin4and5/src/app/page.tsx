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
      <h1 className="center">"AT BLOGERMEN'S, WE WRITE TO OUR HEART'S CONTENT"</h1>
      <br />
      <div id="categories">
        <div className="cards">
          <img src="/creep.jpeg" alt="" />
          <br />
          <h1>Creepy Pasta</h1>
          <p>It was just a game, they said. Something fun to play with friends online. But after I logged off, the whispers followed me. I could hear them in my room, in the dark, right behind me. My reflection in the screen began to change, its eyes darkened, staring back. And when I turned the monitor off? The reflection didn’t leave...</p>
          <br />
          <button> <Link href={"creepypasta"}>Read More</Link></button>
        </div>
        <div className="cards">
          <img src="/hiking.jpeg" alt="" />
          <br />
          <h1>Hiking</h1>
          <p>The trail was quiet, save for the rustle of leaves beneath my boots. As I climbed higher, the trees thinned, giving way to vast, untouched wilderness. The air was crisp and fresh, but there was an underlying tension — like the mountains themselves were holding their breath. Alone, I realized how small I was in the face of such overwhelming beauty, and for a moment, the world felt both infinite and fragile.</p>
          <br />
          <button> <Link href={"hiking"}>Read More</Link></button>
        </div>
        <div className="cards">
          <img src="/mental.png" alt="" />
          <br />
          <h1>Mental Health Problems</h1>
          <p>Sometimes, it felt like trying to climb a mountain with no summit. The weight of invisible struggles pulled me down, and every step forward felt like a battle. But in moments of silence, I found strength in recognizing the fight was never truly alone. Healing isn’t linear, but it’s worth the climb.</p>
          <br />
          <button><Link href={"mental"}>Read More</Link></button>
        </div>
        <div className="cards">
          <img src="/pjj.jpg" alt="" />
          <br />
          <h1>Percy Jackson</h1>
          <p>In Percy Jackson and the Olympians, Percy discovers he's a demigod, the son of Poseidon, and embarks on a series of dangerous quests alongside his friends to prevent a war between the gods. The series blends Greek mythology with modern adventure....</p>
          <br />
          <button><Link href={"percy"}>Read More</Link></button>
        </div>
        <div className="cards">
          <img src="/inflat.jpg" alt="" />
          <div className="info">
          <br />
          <h1>Inflation in Pakistan</h1>
          <p>Inflation in Pakistan has been a persistent challenge, significantly impacting the daily lives of its citizens. Rising prices of essential goods, including food, fuel, and utilities, have strained household budgets, particularly for lower- and middle-income families. The causes of inflation are multifaceted, driven by external factors like global supply chain disruptions and rising oil prices, as well as internal issues such as fiscal mismanagement, currency depreciation, and reliance on imports. The government's efforts to stabilize the economy through monetary tightening and subsidies have had mixed results, with many still struggling to cope with the increased cost of living.</p>
          <br />
          </div>
          <button><Link href={"inflation"}>Read More</Link></button>
        </div>
        <div className="cards">
          <img src="/remote.jpeg" alt="" />
          <br />
          <h1>The Future of Remote Work</h1>
          <p>The COVID-19 pandemic accelerated the shift to remote work, but is it here to stay? This blog will explore the long-term trends influencing the future of work, such as digital collaboration tools, AI-driven productivity software, and evolving work culture. We’ll discuss how businesses and employees can adapt to these changes and what innovations might shape the workplace in the next decade.</p>
          <br />
          <button><Link href={"future"}>Read More</Link></button>
        </div>
        <div className="cards">
          <img src="/coffee.webp" alt="" />
          <br />
          <h1>Coffee Lovers</h1>
          <p>Whether enjoyed in the quiet of a morning routine or shared in lively conversation with friends, coffee has a way of bringing people together. Its rich aroma and bold flavors create moments of calm amidst the rush, while its invigorating effect fuels creativity, productivity, and connection. Coffee is more than just a drink—it's an experience that awakens the senses and sparks inspiration.</p>
          <br />
          <button><Link href={"coffee"}>Read More</Link></button>
        </div>
        <div className="cards">
          <img src="/musk.jpeg" alt="" />
          <br />
          <h1>Gigafactory of compute</h1>
          <p>Elon Musk has announced plans to build a large-scale supercomputer, "gigafactory of compute," to support his artificial intelligence startup, xAI. According to a report by The Information, this supercomputer will incorporate 100,000 Nvidia chips and is slated to be operational by fall 2025.</p>
          <br />
          <button><Link href={"musk"}>Read More</Link></button>
        </div>
      </div>
      <br /><br />
      <p id="closing">"At Blogermen, our mission is to empower readers with insightful, engaging, and authentic content that sparks curiosity and inspires informed decision-making. We strive to build a diverse community of thinkers, learners, and creators by delivering high-quality blogs on a wide range of topics—from tech and lifestyle to business and culture."</p>
      <br /><br />
      <Footer/>
    </div>
  );
}
