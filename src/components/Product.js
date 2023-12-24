import React from "react";
import Items from "./Items";
import { useProductContext } from "../context/ProductContext";

export default function Product() {
  const { response, error, loading } = useProductContext();
  if (response) {
    return (
      <div className="products">
        {response.map((product) => {
          return (
            <div>
              <Items key={product.id} product={product} />
            </div>
          );
        })}
      </div>
    );
  } else if (error) {
    return <div>Error while getting the data....</div>;
  } else if (loading) {
    return <div>Loading......</div>;
  } else {
    return <div>No data is present</div>;
  }
}
