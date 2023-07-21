import React from "react";
import { useState, useEffect } from "react";
import MenuCategory from "./MenuCategory";
import AddCategoryForm from "./AddCategoryForm";

export default function Menu() {
  const [menuCategories, setMenuCategories] = useState([]);

  const fetchMenuCategories = async () => {
    try {
      const response = await fetch("https://localhost:5001/MenuCategory");
      if (response.ok) {
        const data = await response.json();
        setMenuCategories(data);
      } else {
        console.log("Failed to fetch menu categories");
      }
    } catch (error) {
      console.error("An error has occured:", error);
    }
  };

  useEffect(() => {
    fetchMenuCategories();
  }, []);

  return (
    <div>
      <AddCategoryForm fetchMenuCategories={fetchMenuCategories} />
      <div>
        <div className="d-flex justify-content-center text-primary text-uppercase fs-3 mb-5">
          Meniu
        </div>
        <div className="bg-light border shadow p-3 m-5">
          <div className="d-flex justify-content-evenly p-2">
            {menuCategories.map((category) => (
              <MenuCategory
                categoryName={category.name}
                key={category.id}
                categoryId={category.id}
                menuCategories={menuCategories}
                setMenuCategories={setMenuCategories}
                fetchMenuCategories={fetchMenuCategories}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
