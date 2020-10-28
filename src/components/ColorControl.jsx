import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";

const ColorControl = ({ Color, handleChange }) => {
  return (
    <div>
      <p>백그라운드</p>
      <SketchPickerStyled
        color={Color}
        onChange={handleChange}
        disableAlpha={true}
      />
    </div>
  );
};

const SketchPickerStyled = styled(SketchPicker)`
  margin: auto;
`;

export default ColorControl;
