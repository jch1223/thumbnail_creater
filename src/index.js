import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import SizeProvider from "./context/SizeProvider";
import TextProvider from "./context/TextProvider";
import CanvasProvider from "./context/CanvasProvider";

ReactDOM.render(
  <React.StrictMode>
    <SizeProvider>
      <TextProvider>
        <CanvasProvider>
          <App />
        </CanvasProvider>
      </TextProvider>
    </SizeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
