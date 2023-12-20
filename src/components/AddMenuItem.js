import React from "react";
import { useState } from "react";

export default function AddMenuItem(props) {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
    categoryId: props.categoryId,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:5001/Menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        props.handleAddProduct();
        props.fetchCategoryItems(props.categoryId);
        console.log("Object sent successfully!");
      } else {
        // Handle error
        console.error("Failed to send object");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div classname="d-flex flex-column">
      <form onSubmit={handleOnSubmit}>
        <input
          class={{}}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Pavadinimas"
        ></input>
        <input
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Kaina"
        ></input>
        <input
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
          placeholder="Likutis"
        ></input>
        <button type="submit">Patvirtinti</button>
      </form>
    </div>
  );
}
