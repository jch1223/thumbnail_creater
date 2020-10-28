import React, { useContext } from "react";
import styled from "styled-components";
import Canvas from "../components/Canvas";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { CanvasContext } from "../context/CanvasProvider";

const Content = () => {
  const { DownLoadURL } = useContext(CanvasContext);

  return (
    <ContentWrap>
      <Canvas />

      <a href={DownLoadURL} download="sample.png">
        <ButtonStyled type="primary" icon={<DownloadOutlined />} size={"large"}>
          Download
        </ButtonStyled>
      </a>
    </ContentWrap>
  );
};

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
