import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

function SizeControl({ Width, Height, setWidth, setHeight }) {
  const [InputWidth, setInputWidth] = useState(Width);
  const [InputHeight, setInputHeight] = useState(Height);

  const applySize = (e) => {
    e.preventDefault();
    setWidth(InputWidth);
    setHeight(InputHeight);
  };

  return (
    <div>
      <p>크기</p>
      <form onSubmit={applySize}>
        <SizeWrap>
          <div className="size">
            <div>
              <span>가로 </span>
              <input
                type="text"
                value={InputWidth}
                onChange={(e) => {
                  setInputWidth(e.target.value);
                }}
              />
            </div>

            <div>
              <span>세로 </span>
              <input
                type="text"
                value={InputHeight}
                onChange={(e) => {
                  setInputHeight(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <Button onClick={applySize}>적용</Button>
          </div>
        </SizeWrap>
      </form>
    </div>
  );
}

const SizeWrap = styled.div`
  display: flex;

  .size {
    margin-right: 10px;
  }
  button {
    height: 100%;
  }
`;

export default SizeControl;
