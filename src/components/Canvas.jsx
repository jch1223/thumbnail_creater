import React, { useRef, useEffect, useState } from "react";

function Canvas({ Width, Height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //Our first draw

    canvas.width = Width;
    canvas.height = Height;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [Width, Height]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Canvas;
