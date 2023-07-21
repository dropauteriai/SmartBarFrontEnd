import React, { useState, useEffect } from "react";
import AddTableForm from "./AddTableForm";
import EditableInput from "./EditableInput";

export default function GridItem() {
  const [tables, setTables] = useState([]);

  const [addTable, setAddTable] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = (tableId) => {
    setIsEdit(tableId);
  };

  const closeEditInput = () => {
    setIsEdit(false);
  };

  const handleOnAddTableOpen = () => {
    setAddTable(true);
  };

  const handleOnAddTableClosed = () => {
    setAddTable(false);
  };

  //We pass isEdit, because this variable gets table id when the edit button is being clicked.
  //Note: Implement new logic in backend so we don't need to pass sortOrder when updating
  const updateTable = async (tableId = isEdit, updatedName) => {
    const url = "https://localhost:5001/Table";
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: tableId, sortOrder: 0, name: updatedName }),
      });
      if (response.ok) {
        console.log("Put request successful");
        fetchTablesData();
      } else {
        console.log("Failed to send Put request");
      }
    } catch (error) {
      console.error("An error has occured:", error);
    }
  };

  const handleDeleteClick = async (tableId) => {
    const url = `https://localhost:5001/Table?id=${encodeURIComponent(
      tableId
    )}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "text/plain" },
      });
      if (response.ok) {
        setTables((prevTables) =>
          prevTables.filter((table) => table.id !== tableId)
        );
        console.log(`Delete request has been sent succesfully`);
      } else {
        console.log("Failed to send delete request");
      }
    } catch (error) {
      console.error("An error has occured:", error);
    }
  };

  useEffect(() => {
    fetchTablesData();
  }, []);

  const fetchTablesData = async () => {
    try {
      const response = await fetch("https://localhost:5001/Table");
      if (response.ok) {
        const data = await response.json();
        setTables(data);
      } else {
        console.error("Failed to fetch tables data");
      }
    } catch (error) {
      console.error("An error occured:", error);
    }
  };

  return (
    <div className="row">
      {tables.map((table) => (
        <div key={table.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3 p-4">
          <div className="border rounded shadow p-3">
            {isEdit === table.id ? (
              <EditableInput
                currentValue={table.name}
                closeEditInput={closeEditInput}
                updateItemValue={updateTable}
                isBackgroundLight={false}
              />
            ) : (
              <div className="d-flex justify-content-between align-items-center p-2 mb-3 border-bottom fs-5">
                <div className="text-center flex-fill">
                  {table.name} {table.sortOrder}
                </div>
                <div className="">
                  <button
                    whileHover={{ scale: 1.2, transition: { duration: 1 } }}
                    className="btn btn-outline-secondary border-0 ms-3"
                    onClick={() => {
                      handleEditClick(table.id);
                    }}
                  >
                    <div>
                      <i className="fa-solid fa-pen-to-square" />
                    </div>
                  </button>
                  <button
                    onClick={() => handleDeleteClick(table.id)}
                    className="btn btn-outline-secondary border-0 ms-2"
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </div>
              </div>
            )}

            <div className="d-flex justify-content-start p-2"></div>
          </div>
        </div>
      ))}
      <button
        className="btn btn-outline-primary m-4"
        onClick={() => handleOnAddTableOpen()}
      >
        <i className="fa-solid fa-plus me-1" /> Pridėti stalą
      </button>
      {addTable && (
        <AddTableForm
          handleOnAddTableClosed={handleOnAddTableClosed}
          fetchTableData={fetchTablesData}
        />
      )}
      {addTable && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
