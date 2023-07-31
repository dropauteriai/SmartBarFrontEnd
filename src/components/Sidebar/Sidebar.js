import React, { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      className={`border rounded bg-light p-3 sidebar ${
        isSidebarOpen ? "open" : ""
      }`}
    >
      <div className="d-flex align-items-center">
        <div className="p-3">
          <i className="fa-solid fa-user" />
        </div>
        <div className="p-3">nickname</div>
      </div>
      <hr />
      <div className="d-flex flex-column mt-5">
        <div className="border-bottom p-2">Meniu</div>
      </div>
      <div></div>
    </div>
  );
}
