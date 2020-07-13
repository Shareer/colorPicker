import React, { useState, useEffect } from "react";
import "./App.css";
import ShadesInput from "./components/ShadesInput";
import Shades from "./components/Shades";
import randomColor from "randomcolor";

function App() {
  const [color, setColor] = useState("#000");
  useEffect(() => {
    setColor(randomColor());
  }, []);
  const onInputChange = (value) => {
    setColor(value);
  };

  return (
    <div className="App">
      <ShadesInput color={color} onInputChange={onInputChange} />
      <Shades color={color} />
    </div>
  );
}

export default App;
