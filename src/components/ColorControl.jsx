import React, { useState } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";

function ColorControl({ Color, handleChangeComplete, handleChange }) {
  return (
    <div>
      <p>백그라운드</p>
      <SketchPickerStyled
        color={Color}
        onChangeComplete={handleChangeComplete}
        onChange={handleChange}
        disableAlpha={true}
      />
    </div>
  );
}

const SketchPickerStyled = styled(SketchPicker)`
  margin: auto;
`;

export default ColorControl;
