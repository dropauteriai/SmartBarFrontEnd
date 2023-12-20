import React from "react";
import { useState, useEffect } from "react";
import MenuCategory from "./MenuCategory";
import AddCategoryForm from "./AddCategoryForm";

export default function Menu() {
  const [menuCategories, setMenuCategories] = useState([]);
  

  const fetchMenuCategories = async () => {
    try {
      //const menuItemResponse = await fetch("https://localhost:5001/Menu");
      const categoryResponse = await fetch("https://localhost:5001/MenuCategory");
      if (categoryResponse.ok) {
        const categoryData = await categoryResponse.json();
        setMenuCategories(categoryData);
      } else {
        console.log("Failed to fetch menu categories");
      }
      /*if(menuItemResponse.ok){
        const menuItemData = await menuItemResponse.json();
        setMenuItems(menuItemData);
      }*/
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
            {menuCategories && menuCategories.map((category) => ( 
              <MenuCategory
                categoryName={category.name}
                key={category.id}
                categoryId={category.id}
                fetchMenuCategories={fetchMenuCategories}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
