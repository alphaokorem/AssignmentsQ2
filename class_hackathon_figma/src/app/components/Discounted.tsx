import { discounts } from "./Exports";

export default function Discounted() {
  return (
    <div>
      <div id="discountHeading">
        <h2>Discounts up to -50%</h2>
      </div>
      <br />
      <div>
        <div className="shelf">
          {discounts.map((data1, index) => (
            <div className="card" key={index}>
              <img id="like" src="/header-icons/like.png" alt="" />
              <br />
              <img id="cardImage" src={data1.image} alt="image" />
              <br />
              <p>{data1.detail}</p>
              <p>
                <b>{data1.price}</b>
              </p>
              <br />
              <button id="buybutton">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
