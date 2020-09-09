import React, { useState } from "react";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";
import "./App.css";

function App() {
  const [Width, setWidth] = useState(700);
  const [Height, setHeight] = useState(700);

  return (
    <div className="App">
      <Canvas Width={Width} Height={Height} />
      <Controls
        Width={Width}
        Height={Height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
    </div>
  );
}

export default App;
