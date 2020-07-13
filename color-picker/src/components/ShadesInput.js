import React from "react";
import randomColor from "randomcolor";

const ShadesInput = (props) => {
  let titleLetter = [
    "C",
    "O",
    "L",
    "0",
    "R",
    "\xa0 P",
    "I",
    "C",
    "K",
    "E",
    "R",
  ];

  return (
    <div className="shade-search">
      <div className="title-bg">
        {titleLetter.map((letter) => (
          <h1 className="title" style={{ color: randomColor() }}>
            {" "}
            {letter}{" "}
          </h1>
        ))}
      </div>
      <label>Type your favorite color below to pick its shades</label>
      <input
        type="text"
        className="shade-input"
        value={props.color}
        onChange={(e) => props.onInputChange(e.target.value)}
      />
    </div>
  );
};

export default ShadesInput;
