import React, { useContext } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import { CanvasContext } from "../context/CanvasProvider";
import { SET_BACKGROUND_COLOR } from "../context/type";

const ColorControl = () => {
  const { BackgroundColor, canvasDispatch } = useContext(CanvasContext);

  return (
    <div>
      <p>백그라운드</p>
      <SketchPickerStyled
        color={BackgroundColor}
        onChange={(color) =>
          canvasDispatch({
            type: SET_BACKGROUND_COLOR,
            BackgroundColor: color.hex,
          })
        }
        disableAlpha={true}
      />
    </div>
  );
};

const SketchPickerStyled = styled(SketchPicker)`
  margin: auto;
`;

export default ColorControl;
