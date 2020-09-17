import React from "react";
import styled from "styled-components";
import { Tabs, Input } from "antd";

const { TabPane } = Tabs;

function TextControl({ setTextType, setText, setText1, setText2 }) {
  function callback(key) {
    if (key === "2") {
      setTextType(false);
    } else {
      setTextType(true);
    }
    console.log(key);
  }
  return (
    <TextWrap>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="한 줄 텍스트" key="1">
          <Input
            placeholder="한 줄 텍스트"
            onChange={(e) => setText(e.target.value)}
          />
        </TabPane>
        <TabPane tab="두 줄 텍스트" key="2">
          <Input
            placeholder="첫번째 줄 텍스트"
            onChange={(e) => setText1(e.target.value)}
          />
          <Input
            placeholder="두번째 줄 텍스트"
            onChange={(e) => setText2(e.target.value)}
          />
        </TabPane>
      </Tabs>
    </TextWrap>
  );
}

const TextWrap = styled.div``;

export default TextControl;
