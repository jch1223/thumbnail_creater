import React, { useState } from "react";

function Controls({ Width, Height, setWidth, setHeight }) {
  const [InputWidth, setInputWidth] = useState(Width);
  const [InputHeight, setInputHeight] = useState(Height);

  const applySize = (e) => {
    e.preventDefault();
    setWidth(InputWidth);
    setHeight(InputHeight);
  };

  return (
    <div>
      <form onSubmit={applySize}>
        <div className="size">
          <input
            type="text"
            onChange={(e) => {
              setInputWidth(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setInputHeight(e.target.value);
            }}
          />
        </div>
        <button onClick={applySize}>적용</button>
      </form>
    </div>
  );
}

export default Controls;
