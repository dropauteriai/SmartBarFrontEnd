import React, { useState, useEffect } from "react";
import "./CustomStyles/iconbutton.css";

export default function AddTableForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    sortOrder: "",
  });

  function onChangeHandler(event) {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:5001/table", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        props.handleOnAddTableClosed();
        props.fetchTableData();
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
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="border-bottom p-1">
                <div className="d-flex flex-row mb-1 align-items-center">
                  <div className="d-flex flex-fill justify-content-start fs-6">
                    Įrašykite pavadinimą
                  </div>
                  <div className="d-flex flex-row justify-content-end">
                    <div className="icon-button">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm border-0 rounded-circle"
                        onClick={props.handleOnAddTableClosed}
                      >
                        <i className="fa-solid fa-xmark fa-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 mt-4">
                <input
                  type="text"
                  placeholder="Pavadinimas"
                  className="mb-2 form-control"
                  name="name"
                  onChange={onChangeHandler}
                />
                <input
                  type="number"
                  placeholder="Eilė"
                  className="mb-2 form-control"
                  name="sortOrder"
                  onChange={onChangeHandler}
                />
              </div>
              <div type="submit" className="d-flex p-2 justify-content-center">
                <button className="btn btn-outline-primary btn-md">
                  Pridėti
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
