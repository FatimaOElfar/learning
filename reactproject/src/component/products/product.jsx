import { Link } from "react-router-dom";

function Product(props) {
  // console.log(props);
  const{product,ShowButton}=props;

  console.log(product);

  return (
    <>
      <div className="card">
        <img src={product.image} alt=""  className="Data-imag"/>
        <h1>{product.title}</h1>
        <p className="text">
          {product.description}
        </p>
        <p className="Data-price">Price:{product.price}$</p>
        {ShowButton && <Link className="button" to={`/product/${product.id}`}> Details</Link> }
        {/* conditional rendaring */}

      </div>
    </>
  );
}
export default Product;
