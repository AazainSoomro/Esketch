import React, { useState, useEffect } from "react";
import Sketchitem from "./Sketchitem";

function Sketchbox({ ArrSize, Box, ResetFlag, setResetFlag, ColorChoice }) {
  const getGridSize = (ArrSize) => {
    if (ArrSize === 8) return "w-full h-screen  grid grid-cols-8";
    if (ArrSize === 16) return "w-full h-screen  grid grid-cols-16";
    if (ArrSize === 32) return "w-full h-screen  grid grid-cols-32";
    if (ArrSize === 64) return "w-full h-screen  grid grid-cols-64";
  };

  console.log("arrsize" + ArrSize);
  return (
    <div className=" h-full  ">
      <div className={getGridSize(ArrSize)}>
        {Box.map((item, index) => (
          <Sketchitem
            key={index}
            item={item}
            ResetFlag={ResetFlag}
            setResetFlag={setResetFlag}
            ColorChoice={ColorChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default Sketchbox;
