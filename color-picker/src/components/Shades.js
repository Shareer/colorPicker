import React, { useState, useEffect } from "react";
import Values from "values.js";
import Shade from "./ShadeItem";
import isColor from "is-color";

const Shades = ({ color }) => {
  const [shades, setShades] = useState([]);
  useEffect(() => {
    if (isColor(color)) createShades(color);
  }, [color]);

  const createShades = (color) => {
    const shades_color = new Values(color);
    let shades = shades_color.shades(1);
    setShades(shades);
  };

  return (
    <div className="shades">
      {shades.map((shade) => (
        <Shade shade={shade} />
      ))}
    </div>
  );
};

export default Shades;
