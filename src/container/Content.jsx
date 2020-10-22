import React from "react";
import styled from "styled-components";
import Canvas from "../components/Canvas";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function Content({
  Width,
  Height,
  TextType,
  Text,
  Text1,
  Text2,
  TextSize,
  Color,
  DownLoadURL,
  handleDownloadURL,
}) {
  return (
    <ContentWrap>
      <Canvas
        TextType={TextType}
        Width={Width}
        Height={Height}
        Text={Text}
        Text1={Text1}
        Text2={Text2}
        TextSize={TextSize}
        Color={Color}
        handleDownloadURL={handleDownloadURL}
      />

      <a href={DownLoadURL} download="sample.png">
        <ButtonStyled type="primary" icon={<DownloadOutlined />} size={"large"}>
          Download
        </ButtonStyled>
      </a>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  background-color: #282c34;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
`;

const ButtonStyled = styled(Button)`
  margin-top: 20px;
`;

export default Content;
