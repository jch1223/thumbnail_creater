import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

function Canvas({ Width, Height, TextType, Text, Text1, Text2, TextSize }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = Width;
    canvas.height = Height;

    context.textAlign = "center";
    context.font = `${TextSize}px Arial`;

    if (TextType) {
      context.fillText(
        Text,
        canvas.width / 2,
        canvas.height / 2 + TextSize / 2
      );
    } else {
      context.fillText(
        Text1,
        canvas.width / 2,
        canvas.height / 2 + TextSize / 2 - TextSize / 1.5
      );
      context.fillText(
        Text2,
        canvas.width / 2,
        canvas.height / 2 + TextSize / 2 + TextSize / 1.5
      );
    }
  }, [Width, Height, TextType, Text, Text1, Text2, TextSize]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ background: "#e2e2e2" }} />
    </div>
  );
}

export default Canvas;
