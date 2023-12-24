import React, { createContext, useContext, useState } from "react";
const CategoryContext = createContext();

export default function CategoryProvider({ children }) {
  const [selectCatagory, setCatagory] = useState(null);

  return (
    <CategoryContext.Provider
      value={{
        selectCatagory,
        setCatagory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryContext = () => useContext(CategoryContext);
