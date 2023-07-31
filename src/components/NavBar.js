import React, { useContext, useEffect } from "react";
import { SidebarContext } from "./Sidebar/SidebarContext";

export default function NavBar() {
  const { isSidebarOpen, handleSidebarToggle } = useContext(SidebarContext);

  const handleClick = () => {
    handleSidebarToggle();
  };

  //---Only for developing purposes---
  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);
  //----------------------------------

  return (
    <div className="container-fluid shadow-sm">
      <div className="row align-items-center p-3">
        <div className="col d-flex align-items-center ms-5 fs-2">
          <div className="me-5">
            <button
              className="btn btn-outline-secondary border-0"
              onClick={handleClick}
            >
              {isSidebarOpen ? (
                <i className="fa-solid fa-arrow-left fa-2xl" />
              ) : (
                <i className="fa-solid fa-bars fa-2xl" />
              )}
            </button>
          </div>
          <div>SmartBar</div>
        </div>

        <div className="col ms-5 fs-3">dasdsadafasfasf</div>
      </div>
    </div>
  );
}
