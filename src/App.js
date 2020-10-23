import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Content from "./container/Content";
import Side from "./container/Side";
import styled from "styled-components";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [TextType_delete, setTextType] = useState(true);
  const [Text_delete, setText] = useState("텍스트를 입력하세요");
  const [Text1_delete, setText1] = useState("텍스트를");
  const [Text2_delete, setText2] = useState("입력하세요");
  const [TextSize_delete, setTextSize] = useState("50");

  const [Color, setColor] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );

  const [DownLoadURL, setDownLoadURL] = useState("");

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
      <Helmet>
        <title>썸네일 크리에이터</title>
        <meta name="description" content="썸네일, 배너 생성기입니다." />
        <meta
          name="keywords"
          content="썸네일, 배너, 생성기, 크리에이터, 만들기, 사이트, devmole"
        />
      </Helmet>

      <Content
        Color={Color}
        DownLoadURL={DownLoadURL}
        handleDownloadURL={handleDownloadURL}
      />

      <Side
        setTextType={setTextType}
        setText={setText}
        setText1={setText1}
        setText2={setText2}
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
