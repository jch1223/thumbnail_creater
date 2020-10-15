import React from "react";
import { SketchPicker } from "react-color";
import { useState } from "react";
import styled from "styled-components";

function ColorControl(props) {
  const [state, setstate] = useState("#fff");

  const handleChangeComplete = (color) => {
    setstate(color.hex);
  };

  const handleChange = (color, event) => {
    setstate(color.hex);
  };

  return (
    <div>
      <p>백그라운드</p>
      <SketchPickerStyled
        color={state}
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
