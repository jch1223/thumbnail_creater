import React, { useContext } from "react";
import { SizeContext } from "../context/SizeProvider";
import { SET_WIDTH, SET_HEIGHT } from "../context/type";

import { Input } from "antd";
import styled from "styled-components";

const SizeControl = () => {
  const { width, height, sizeDispatch } = useContext(SizeContext);

  return (
    <div>
      <p>백그라운드 크기</p>
      <SizeWrap>
        <Input
          type="text"
          addonBefore="가로"
          value={width}
          onChange={(e) => {
            sizeDispatch({ type: SET_WIDTH, width: e.target.value });
          }}
        ></Input>
        <Input
          type="text"
          addonBefore="세로"
          value={height}
          onChange={(e) => {
            sizeDispatch({ type: SET_HEIGHT, height: e.target.value });
          }}
        ></Input>
      </SizeWrap>

      <br />
    </div>
  );
};

const SizeWrap = styled.div`
  display: flex;
  justify-content: center;

  .ant-input-group-wrapper:first-child {
    margin-right: 10px;
  }
`;

export default SizeControl;
