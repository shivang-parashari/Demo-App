//import { useCallback} from "react"
import React from "react";
import { useCategoryContext } from "../context/CategoryContext";

export default function Catagory({ catagory }) {
  const { setCatagory } = useCategoryContext();

  const handleOnClick = (catagory) => {
    // console.log(catagory.target.innerHTML);
    setCatagory(catagory.target.innerHTML);
  };

  return (
    <div className="header-item" onClick={handleOnClick}>
      {catagory}
    </div>
  );
}
