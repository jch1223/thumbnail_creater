import React, { useRef, useEffect, useState } from "react";

function Canvas({ Width, Height, Text1, Text2 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = Width;
    canvas.height = Height;

    context.textAlign = "center";
    context.font = "50px Arial";
    context.fillText(Text1, canvas.width / 2, canvas.height / 2 - 25);
    context.fillText(Text2, canvas.width / 2, canvas.height / 2 + 40);
  }, [Width, Height, Text1, Text2]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ background: "#e2e2e2" }} />
    </div>
  );
}

export default Canvas;
