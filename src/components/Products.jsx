import { products } from "../utils/data";
import { ProductCard } from "./ProductCard";
import "./Products.css";

export function Products() {
  return (
    <>
      <aside>
        <div className="menor_mayor">
          <input type="radio" id="ascendent" name="order" />
          <label htmlFor="ascendent">Menor a mayor precio</label>
        </div>
        <div className="mayor_menor">
          <input type="radio" id="descendent" name="order" />
          <label htmlFor="descendent">Mayor a menor precio</label>
        </div>
      </aside>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
