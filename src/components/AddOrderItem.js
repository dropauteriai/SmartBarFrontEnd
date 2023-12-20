import React from "react";
import { useState } from "react";

export default function AddOrderItem() {
  const [menuCategories, setMenuCategories] = useState([]);
  return (
    <div>
      {menuCategories
        ? menuCategories.map((category) => <div>{category.name}</div>)
        : ""}
    </div>
  );
}
