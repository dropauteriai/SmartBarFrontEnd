import React, { useState } from "react";
import NavBar from "./NavBar.js";
import GridItem from "./GridItem.js";

export default function Home() {
  const goToMenuPage = () => {
    window.location.href = "/Menu";
  };
  return (
    <div>
      <GridItem />
      <button onClick={goToMenuPage} className="btn btn-outline-primary m-3">
        Meniu
      </button>
    </div>
  );
}
