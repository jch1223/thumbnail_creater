import React, { useRef, useEffect, useContext } from "react";
import { SizeContext } from "../context/SizeProvider";
import { TextContext } from "../context/TextProvider";
import { CanvasContext } from "../context/CanvasProvider";
import { SET_DOWNLOAD_URL } from "../context/type";

const Canvas = () => {
  const { width, height } = useContext(SizeContext);
  const { TextType, Text, Text1, Text2, TextSize } = useContext(TextContext);
  const { BackgroundColor, canvasDispatch } = useContext(CanvasContext);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = BackgroundColor;
    context.fillRect(0, 0, width, height);

    context.textAlign = "center";
    context.font = `${TextSize}px Arial`;

    if (TextType === "one-line") {
      context.fillStyle = "#fff";
      context.fillText(
        Text,
        canvas.width / 2,
        canvas.height / 2 + TextSize / 2
      );
    } else {
      context.fillStyle = "#fff";
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

    canvasDispatch({
      type: SET_DOWNLOAD_URL,
      DownLoadURL: canvas.toDataURL("image/png"),
    });
  }, [
    width,
    height,
    TextType,
    Text,
    Text1,
    Text2,
    TextSize,
    BackgroundColor,
    canvasDispatch,
  ]);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default Canvas;
