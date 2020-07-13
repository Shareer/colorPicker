import React from "react";
import randomColor from "randomcolor";

const ShadesInput = (props) => {
  let titleLetter = [
    {alphabet:"C", id :1},
    {alphabet:"O", id :2},
    {alphabet:"L", id :3},
    {alphabet:"O", id :4},
    {alphabet:"R", id :5},
    {alphabet:"\xa0 P", id :6},
    {alphabet:"I", id :7},
    {alphabet:"C", id :8},
    {alphabet:"K", id :9},
    {alphabet:"E", id :10},
    {alphabet:"R", id :11}
  ];

  return (
    <div className="shade-search">
      <div className="title-bg">
        {titleLetter.map((letter) => (
          <h1 className="title" style={{ color: randomColor() }} key={letter.id}>
            {letter.alphabet}
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
