import React, { useEffect, useState } from "react";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("/.netlify/functions/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, [setProducts]);

  console.log(products);
  return (
    <>
      <h1>Pricing</h1>
      <div className="product">
        {products &&
          products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <h2>{product.name}</h2>
                <p className="img">
                  <img src={product.images[0]} alt={product.name} />
                </p>
                <p className="sku">SKU: {product.id}</p>
                <p className="description">{product.description}</p>
                <p className="price">
                  ${(product.prices[0].unit_amount / 100)
                    .toFixed(2)}
                </p>
                <p className="buynow">
                  <button>Buy Now</button>
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;