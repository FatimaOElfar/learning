import { useEffect, useState } from "react";
import Product from "./product";
import "./productlist.css";

function ProductList() {
  
  const url_api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div className="productList">

      <div className="container">
        <h1 className="header">Products</h1>
        <div className="product">
          {
          
          products.map((product) => {
            return (
              
                <div className="div-1" key={product.id}> <Product product={product} ShowButton={true} />  </div>
            
            );
          })
           }
            {/* <div className="div-1">
            <Product/>
            </div>
            <div className="div-1">
            <Product/>
            </div>
            <div className="div-1">
            <Product/>
            </div> */}
        </div>
      </div>
      </div>
    </>
  );
}
export default ProductList;
