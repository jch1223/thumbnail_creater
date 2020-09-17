import React, { useState } from "react";
import { Button, Input } from "antd";
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
              <Input
                type="text"
                addonBefore="가로"
                value={InputWidth}
                onChange={(e) => {
                  setInputWidth(e.target.value);
                }}
              ></Input>
            </div>
            <div>
              <Input
                type="text"
                addonBefore="세로"
                value={InputHeight}
                onChange={(e) => {
                  setInputHeight(e.target.value);
                }}
              ></Input>
            </div>
          </div>

          <div>
            <Button htmlType="submit" onClick={applySize}>
              적용
            </Button>
          </div>
        </SizeWrap>
      </form>
    </div>
  );
}

const SizeWrap = styled.div`
  display: flex;
  justify-content: center;

  .size {
    margin-right: 10px;
  }
  button {
    height: 100%;
  }
`;

export default SizeControl;
