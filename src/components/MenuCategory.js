import React, { useState } from "react";
import EditableInput from "./EditableInput";

export default function MenuCategory(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleEditCloseClick = () => {
    setIsEditMode(false);
  };

  const updateCategory = async (categoryId = props.categoryId, updatedName) => {
    const url = "https://localhost:5001/MenuCategory";
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: categoryId, name: updatedName }),
      });
      if (response.ok) {
        console.log("Put request successful");
        props.fetchMenuCategories();
      } else {
        console.log("Failed to send Put request");
      }
    } catch (error) {
      console.error("An error has occured:", error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    const url = `https://localhost:5001/MenuCategory?MenuCategoryId=${encodeURIComponent(
      categoryId
    )}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "text/plain" },
    });

    //Note: Solve the problem of not having only the latest array of menuCategories.
    //For now it works fine, but later it may cause some bugs.
    if (response.ok) {
      props.setMenuCategories(
        props.menuCategories.filter(
          (menuCategory) => menuCategory.id !== categoryId
        )
      );
      console.log("Category has been deleted successfully.");
    }
  };
  return (
    <div className="p-2">
      {isEditMode ? (
        <EditableInput
          closeEditInput={handleEditCloseClick}
          currentValue={props.categoryName}
          updateItemValue={updateCategory}
          isBackgroundLight={true}
        />
      ) : (
        <div className="row align-items-center">
          <div className="col p-2 d-flex justify-content-start">
            {props.categoryName}
          </div>
          <div className="col p-2 d-flex justify-content-end">
            <button
              className="btn btn-outline-secondary border-0 me-2"
              onClick={handleEditClick}
            >
              <i className="fa-solid fa-pen-to-square" />
            </button>
            <button
              className="btn btn-outline-secondary border-0"
              onClick={() => handleDeleteCategory(props.categoryId)}
            >
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center border-bottom border-top p-2">
        <ul></ul>
      </div>
      <div className="p-2 mt-3">
        <button className="btn btn-outline-primary">Pridėti produktą</button>
      </div>
    </div>
  );
}
