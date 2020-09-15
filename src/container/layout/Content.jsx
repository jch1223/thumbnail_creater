import React from "react";
import styled from "styled-components";
import Canvas from "../../components/Canvas";

function Content({ Width, Height, Text1, Text2 }) {
  return (
    <CanvasWrap>
      <Canvas Width={Width} Height={Height} Text1={Text1} Text2={Text2} />
    </CanvasWrap>
  );
}

const CanvasWrap = styled.div`
  display: inline-flex;
  width: 80%;
  border-right: 1px solid #e2e2e2;
  justify-content: center;
`;

export default Content;
