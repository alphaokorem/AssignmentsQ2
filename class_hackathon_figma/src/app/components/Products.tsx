import { products } from "./Exports";

export default function Products() {
  return (
    <div id="products">
      <div id="productsNavbar">
        <ul>
          <button>
            <li>New Arrival</li>
          </button>
          <button>
            <li>Bestseller</li>
          </button>
          <button>
            <li>Featured Products</li>
          </button>
        </ul>
      </div>
      <br />

      <div className="shelf">
        {products.map((data1, index) => (
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
  );
}
