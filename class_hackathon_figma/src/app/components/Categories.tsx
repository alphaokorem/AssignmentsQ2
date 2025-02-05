import Link from "next/link";
import { categories } from "./Exports";
export default function Categories() {
  return (
    <div id="Categories">
      <div className="top">
        <h2>Browse By Category</h2>
        <div id="buttons">
          <button>
            <img src="/category/left.png" alt="" />
          </button>{" "}
          <button>
            <img src="/category/right.png" alt="" />
          </button>
        </div>
      </div>

      <div id="categoryDiv">
        {categories.map((data, index) => (
          <Link href={"/"} key={index}>
            <div className="categoryCards">
              <img src={data.image} alt="icon" />
              <p>{data.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}