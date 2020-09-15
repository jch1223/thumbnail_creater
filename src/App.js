import React, { useState } from "react";
import Content from "./container/layout/Content";
import Side from "./container/layout/Side";
import styled from "styled-components";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [Width, setWidth] = useState(500);
  const [Height, setHeight] = useState(500);
  const [Text1, setText1] = useState("텍스트를");
  const [Text2, setText2] = useState("입력하세요");

  return (
    <AppWrap className="App">
      <Content Width={Width} Height={Height} Text1={Text1} Text2={Text2} />
      <Side
        Width={Width}
        Height={Height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: flex;
`;

export default App;
