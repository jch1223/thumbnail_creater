import React from "react";
import styled from "styled-components";
import SizeControl from "../../components/SizeControl";
import TextControl from "../../components/TextControl";
import ColorControl from "../../components/ColorControl";

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
  TextSize,
  setTextSize,
}) {
  const handleColorChange = ({ hex }) => console.log(hex);
  return (
    <ControlsWrap>
      <SizeControl
        Width={Width}
        Height={Height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
      <TextControl
        setTextType={setTextType}
        Text={Text}
        Text1={Text1}
        Text2={Text2}
        setText={setText}
        setText1={setText1}
        setText2={setText2}
        TextSize={TextSize}
        setTextSize={setTextSize}
      />
      <ColorControl color="orange" onChangeComplete={handleColorChange} />
    </ControlsWrap>
  );
}

const ControlsWrap = styled.div`
  width: 20%;
  height: 100%;
  padding: 40px;
`;

export default Side;
