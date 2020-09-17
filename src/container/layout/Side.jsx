import React from "react";
import styled from "styled-components";
import SizeControl from "../../components/SizeControl";
import TextControl from "../../components/TextControl";

function Side({
  Width,
  Height,
  setTextType,
  Text,
  Text1,
  Text2,
  setText,
  setText1,
  setText2,
  setWidth,
  setHeight,
}) {
  return (
    <ControlsWrap>
      <SizeControl
        Width={Width}
        Height={Height}
        setWidth={setWidth}
        setHeight={setHeight}
        Text={Text}
        Text1={Text1}
        Text2={Text2}
      />
      <TextControl
        setTextType={setTextType}
        setText={setText}
        setText1={setText1}
        setText2={setText2}
      />
    </ControlsWrap>
  );
}

const ControlsWrap = styled.div`
  width: 20%;
  height: 100%;
  padding: 40px;
`;

export default Side;
