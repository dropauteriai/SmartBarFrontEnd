import React from "react";
import GridItem from "./GridItem.js";

export default function Home() {
  const goToMenuPage = () => {
    window.location.href = "/Menu";
  };
  return (
    <div className="mt-4">
      <GridItem />
      <button onClick={goToMenuPage} className="btn btn-outline-primary m-3">
        Meniu
      </button>
    </div>
  );
}
