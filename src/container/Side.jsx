import React from "react";
import styled from "styled-components";
import SizeControl from "../components/SizeControl";
import TextControl from "../components/TextControl";
import ColorControl from "../components/ColorControl";

function Side({
  setTextType,
  Text,
  Text1,
  Text2,
  setText,
  setText1,
  setText2,
  TextSize,
  setTextSize,
  Color,
  handleChangeComplete,
  handleChange,
}) {
  return (
    <ControlsWrap>
      <SizeControl />
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
      <ColorControl
        Color={Color}
        handleChangeComplete={handleChangeComplete}
        handleChange={handleChange}
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
