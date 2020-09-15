import React from "react";
import styled from "styled-components";
import SizeControl from "../../components/SizeControl";
import TextControl from "../../components/TextControl";

function Side({ Width, Height, setWidth, setHeight }) {
  return (
    <ControlsWrap>
      <SizeControl
        Width={Width}
        Height={Height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
      <TextControl />
    </ControlsWrap>
  );
}

const ControlsWrap = styled.div`
  display: inline-flex;
  width: 20%;
  height: 100%;
  justify-content: center;
`;

export default Side;
