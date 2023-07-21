import React, { useState } from "react";

export default function EditableInput(props) {
  const [editableValue, setEditableValue] = useState(props.currentValue);

  const handleOnChange = (e) => {
    setEditableValue(e.target.value);
  };

  const setNewValue = () => {
    //Passing undefined value because function updateCategory has a default value of category id in parent component.
    props.updateItemValue(undefined, editableValue);
    props.closeEditInput();
  };

  return (
    <div className="input-group p-2">
      <input
        className={
          props.isBackgroundLight
            ? "form-control border-0 bg-light"
            : "form-control border-0"
        }
        value={editableValue}
        onChange={handleOnChange}
      ></input>
      <div className="ms-2">
        <button
          className="btn btn-outline-success border-0"
          onClick={setNewValue}
        >
          <i className="fa-solid fa-check" />
        </button>
        <button
          className="btn btn-outline-danger border-0"
          onClick={props.closeEditInput}
        >
          <i className="fa-solid fa-x" />
        </button>
      </div>
    </div>
  );
}
