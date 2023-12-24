import React from "react";

export default function Items({ product }) {
  return (
    <div className="product">
      <img className="image" src={product.image} alt="product"></img>
      <div className="product-description">
        <div className="product-title">{product.title}</div>
      </div>
      <div className="product-footer">
        <div className="product-price">${product.price}</div>
        {/* <div className='cart-button'>
                 <AddToCart/>
              </div> */}
      </div>
    </div>
  );
}
