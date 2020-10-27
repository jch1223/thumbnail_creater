import React from "react";
import styled from "styled-components";
import SizeControl from "../components/SizeControl";
import TextControl from "../components/TextControl";
import ColorControl from "../components/ColorControl";

const Side = ({ Color, handleChangeComplete, handleChange }) => {
  return (
    <ControlsWrap>
      <SizeControl />
      <TextControl />
      <ColorControl
        Color={Color}
        handleChangeComplete={handleChangeComplete}
        handleChange={handleChange}
      />
    </ControlsWrap>
  );
};

const ControlsWrap = styled.div`
  width: 20%;
  height: 100%;
  padding: 40px;
`;

export default Side;
