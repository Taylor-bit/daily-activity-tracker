import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function DailyActivityPage() {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown-container">
      <h2 id={"title"} style={{ textAlign: "center" }}>Welcome to your daily activity!</h2>
      <Dropdown selected={selected} setSelected={setSelected} setIsActive={setIsActive} />
    </div>
  );
}

export default DailyActivityPage;
