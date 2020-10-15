import React from "react";
import styled from "styled-components";
import Canvas from "../../components/Canvas";

function Content({ Width, Height, TextType, Text, Text1, Text2, TextSize }) {
  return (
    <CanvasWrap>
      <Canvas
        TextType={TextType}
        Width={Width}
        Height={Height}
        Text={Text}
        Text1={Text1}
        Text2={Text2}
        TextSize={TextSize}
      />
    </CanvasWrap>
  );
}

const CanvasWrap = styled.div`
  overflow: scroll;
  display: inline-flex;
  width: 80%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  justify-content: center;
  align-items: center;
`;

export default Content;
