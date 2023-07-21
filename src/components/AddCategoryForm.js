import React, { useState } from "react";

export default function AddCategoryForm(props) {
  const [formData, setFormData] = useState("");

  function onChangeHandler(event) {
    setFormData(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://localhost:5001/MenuCategory?name=${encodeURIComponent(
      formData
    )}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
      });

      if (response.ok) {
        console.log("formData sent successfully!");
        props.fetchMenuCategories();
      } else {
        console.error("Failed to send object");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="d-inline-flex m-3 border">
      <form onSubmit={handleSubmit} className="p-3">
        <input
          onChange={onChangeHandler}
          placeholder="Kategorijos pavadinimas"
          className="form-control mb-3"
        />
        <button className="btn btn-outline-primary" type="submit">
          Pridėti kategoriją
        </button>
      </form>
    </div>
  );
}
