import React, { createContext, useContext } from "react";
import useApi from "./../hooks/useApi";
import { useCategoryContext } from "./CategoryContext";
const ProductContext = createContext();
//https://www.youtube.com/watch?v=KbEZfOr59zY

export default function ProductProvider({ children }) {
  const { selectCatagory } = useCategoryContext();
  const { response, error, loading } = useApi(
    `https://fakestoreapi.com/products/category/${selectCatagory}`
  );

  return (
    <ProductContext.Provider
      value={{
        response,
        error,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
