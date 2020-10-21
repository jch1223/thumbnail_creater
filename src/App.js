import React, { useState, useEffect } from "react";
import Content from "./container/layout/Content";
import Side from "./container/layout/Side";
import styled from "styled-components";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [Width, setWidth] = useState(500);
  const [Height, setHeight] = useState(500);

  const [TextType, setTextType] = useState(true);
  const [Text, setText] = useState("텍스트를 입력하세요");
  const [Text1, setText1] = useState("텍스트를");
  const [Text2, setText2] = useState("입력하세요");
  const [TextSize, setTextSize] = useState("50");

  const [Color, setColor] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );

  const [DownLoadURL, setDownLoadURL] = useState("");

  useEffect(() => {
    console.log(TextType);
  }, [TextType]);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleChange = (color, event) => {
    setColor(color.hex);
  };

  const handleDownloadURL = (url) => {
    setDownLoadURL(url);
  };

  return (
    <AppWrap className="App">
      <Content
        Width={Width}
        Height={Height}
        TextType={TextType}
        Text={Text}
        Text1={Text1}
        Text2={Text2}
        TextSize={TextSize}
        Color={Color}
        DownLoadURL={DownLoadURL}
        handleDownloadURL={handleDownloadURL}
      />

      <Side
        Width={Width}
        Height={Height}
        setTextType={setTextType}
        setWidth={setWidth}
        setHeight={setHeight}
        Text={Text}
        Text1={Text1}
        Text2={Text2}
        setText={setText}
        setText1={setText1}
        setText2={setText2}
        TextSize={TextSize}
        setTextSize={setTextSize}
        Color={Color}
        handleChangeComplete={handleChangeComplete}
        handleChange={handleChange}
      />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: flex;
  height: 100%;
`;

export default App;
