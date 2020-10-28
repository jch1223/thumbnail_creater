import React from "react";
import { Helmet } from "react-helmet";
import Content from "./container/Content";
import Side from "./container/Side";
import styled from "styled-components";

import "./App.css";
import "antd/dist/antd.css";

const App = () => {
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

      <Content />
      <Side />
    </AppWrap>
  );
};

const AppWrap = styled.div`
  display: flex;
  height: 100%;
`;

export default App;
