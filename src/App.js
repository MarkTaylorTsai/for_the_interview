import React from "react";
import { BsTriangle, FaEdit } from "./style/Icon";import "./style/ClockStyling.css";
import Clock1 from "./components/Clock";
import DateTime from "./components/DateTime";
function App() {
  return (
    <div className="App">
      <Clock1 />
      <DateTime />
    </div>
  );
}

export default App;