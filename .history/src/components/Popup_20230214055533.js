import React from "react";

export default function Popup() {
  return (
    <div className="d-inline-flex">
      <div className="p-2 align-items-center justify-content-center border border-2 border-secondary rounded">
        <button className="border-0 align-items-center justify-content-center bg-white fs-6">
          Option nr.1
        </button>
        <button className="border-0 align-items-center justify-content-center bg-white">
          Option nr.2
        </button>
        <button className="border-0 align-items-center justify-content-center bg-white">
          Option nr.3
        </button>
      </div>
    </div>
  );
}
