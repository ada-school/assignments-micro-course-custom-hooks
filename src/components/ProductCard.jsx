import "./ProductCard.css";
export function ProductCard({ image, name, price }) {
  return (
    <div className="productCard">
      <h2>{name}</h2> 
      <img src={image} alt="Imagen de producto" />
      <div className="info">
        <p>{`Price: ${price}`}</p>
      </div>
    </div>
  );
}
