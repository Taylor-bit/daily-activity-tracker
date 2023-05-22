import React, { useState } from "react";
import RandomActiivity from "../components/RandomActivity";

function RandomActivityPage() {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="page-content">
      <h2 id={"title"} style={{ textAlign: "center" }}>Welcome to your daily activity!</h2>
      <RandomActiivity />
    </div>
  );
}

export default RandomActivityPage;