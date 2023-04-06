import React, { useEffect, useState } from "react";
import Sketchbox from "./Sketchbox";

function Box() {
  const [ArrSize, setArrSize] = useState(8);
  const [ResetFlag, setResetFlag] = useState(true);
  const [ColorChoice, setColorChoice] = useState("white");
  const [Box, setBox] = useState(new Array(ArrSize * ArrSize).fill("black"));
  const [ActiveColorButton, setActiveColorButton] = useState(2);
  const [ActiveSizeButton, setActiveSizeButton] = useState(8);

  const handleColorButtonClick = (buttonIndex) => {
    setActiveColorButton(buttonIndex);
  };
  const handleSizeButtonClick = (buttonIndex) => {
    setResetFlag(true);
    setActiveSizeButton(buttonIndex);
    setArrSize(buttonIndex);

    setBox(new Array(buttonIndex * buttonIndex).fill("black"));
  };
  const getColorButtonStatus = (buttonNo) => {
    if (ActiveColorButton === buttonNo)
      return "bg-teal-700 text-white px-8 py-4 ";
    else return "bg-black text-white  px-8 py-4 ";
  };
  const getSizeButtonStatus = (buttonNo) => {
    if (ActiveSizeButton === buttonNo)
      return "bg-teal-700 text-white py-4 px-8 ";
    else return "bg-black text-white py-4 px-8 ";
  };

  return (
    <div className="bg-teal-900">
      <div className="flex">
        <div className="w-2/4 space-y-16">
          <h1 className="text-white text-center text-5xl py-2">
            SKETCH<span className="text-green-200">BOOK</span>
          </h1>
          <div className="text-white  text-2xl space-y-16 text-center">
            <div>
              <h1 className="p-2">COLOR</h1>
              <div className="flex justify-center items-center ">
                <button
                  className={getColorButtonStatus(1)}
                  onClick={() => {
                    setColorChoice("random");
                    handleColorButtonClick(1);
                  }}
                >
                  Random
                </button>
                <button
                  className={getColorButtonStatus(2)}
                  onClick={() => {
                    setColorChoice("white");
                    handleColorButtonClick(2);
                  }}
                >
                  white
                </button>
              </div>
            </div>
            <div>
              <h1 className="p-2">SIZE</h1>
              <div className="flex justify-center items-center ">
                <button
                  className={getSizeButtonStatus(8)}
                  onClick={() => handleSizeButtonClick(8)}
                >
                  1
                </button>
                <button
                  className={getSizeButtonStatus(16)}
                  onClick={() => handleSizeButtonClick(16)}
                >
                  2
                </button>
                <button
                  className={getSizeButtonStatus(32)}
                  onClick={() => handleSizeButtonClick(32)}
                >
                  3
                </button>
                <button
                  className={getSizeButtonStatus(64)}
                  onClick={() => handleSizeButtonClick(64)}
                >
                  4
                </button>
              </div>
            </div>
            <button
              className="bg-black text-white px-12 py-4 rounded-md"
              onClick={() => {
                setResetFlag(true);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="w-3/4">
          <Sketchbox
            ArrSize={ArrSize}
            Box={Box}
            ResetFlag={ResetFlag}
            setResetFlag={setResetFlag}
            ColorChoice={ColorChoice}
          />
        </div>
      </div>
    </div>
  );
}

export default Box;
