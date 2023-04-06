import React, { useEffect, useState } from "react";

const randomColors = [
  "red",
  "yellow",
  "orange",
  "pink",
  "green",
  "purple",
  "blue",
];

function Sketchitem({ item, ResetFlag, setResetFlag, ColorChoice }) {
  const [Color, setColor] = useState(item);

  useEffect(() => {
    changeResetFlag();
  });

  const colorChange = () => {
    setResetFlag(false);
    if (ColorChoice === "white") setColor("white");
    if (ColorChoice === "random")
      setColor(`${randomColors[Math.floor(Math.random() * 6)]}`);
  };

  const changeResetFlag = () => {
    if (ResetFlag === true) {
      setColor("black");
    }
  };

  return <div onMouseEnter={colorChange} style={{ background: Color }}></div>;
}

export default Sketchitem;
