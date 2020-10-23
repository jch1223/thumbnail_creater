import React, { useRef, useEffect, useContext } from "react";
import { SizeContext } from "../context/SizeProvider";

function Canvas({
  TextType,
  Text,
  Text1,
  Text2,
  TextSize,
  Color,
  handleDownloadURL,
}) {
  const { width, height } = useContext(SizeContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(Color);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = Color;
    context.fillRect(0, 0, width, height);

    context.textAlign = "center";
    context.font = `${TextSize}px Arial`;

    if (TextType) {
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
    console.log(canvas.toDataURL("image/png"));
    handleDownloadURL(canvas.toDataURL("image/png"));
  }, [
    width,
    height,
    TextType,
    Text,
    Text1,
    Text2,
    TextSize,
    Color,
    handleDownloadURL,
  ]);

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
}

export default Canvas;
