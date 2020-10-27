import React, { useContext } from "react";
import styled from "styled-components";
import { Tabs, Input, InputNumber, Row, Col } from "antd";
import { TextContext } from "../context/TextProvider";
import {
  SET_TEXT_TYPE,
  SET_ONELINE_TEXT,
  SET_TWOLINE_TEXT1,
  SET_TWOLINE_TEXT2,
  SET_TEXT_SIZE,
} from "../context/type";

const { TabPane } = Tabs;

const TextControl = () => {
  const { Text, Text1, Text2, TextSize, textDispatch } = useContext(
    TextContext
  );

  const tabHandler = (key) => {
    if (key === "2") {
      textDispatch({ type: SET_TEXT_TYPE, TextType: "two-line" });
    } else {
      textDispatch({ type: SET_TEXT_TYPE, TextType: "one-line" });
    }
  };

  const textHandler = (type) => (e) => {
    textDispatch({ type: type, Text: e.target.value });
  };

  return (
    <TextWrap>
      <p>폰트 사이즈</p>
      <Row>
        <Col span={20}>
          <InputNumber
            style={{ width: "100%" }}
            value={TextSize}
            onChange={(value) => {
              textDispatch({ type: SET_TEXT_SIZE, TextSize: value });
            }}
          />
        </Col>
        <Col span={4} style={{ fontSize: "20px", padding: "0" }}>
          px
        </Col>
      </Row>

      <br />

      <Tabs defaultActiveKey="1" onChange={tabHandler}>
        <TabPane tab="한 줄 텍스트" key="1">
          <Row>
            <Input
              placeholder="한 줄 텍스트"
              onChange={textHandler(SET_ONELINE_TEXT)}
              value={Text}
            />
          </Row>
        </TabPane>
        <TabPane tab="두 줄 텍스트" key="2">
          <Input
            placeholder="첫번째 줄 텍스트"
            onChange={textHandler(SET_TWOLINE_TEXT1)}
            value={Text1}
          />
          <Input
            placeholder="두번째 줄 텍스트"
            onChange={textHandler(SET_TWOLINE_TEXT2)}
            value={Text2}
          />
        </TabPane>
      </Tabs>
    </TextWrap>
  );
};

const TextWrap = styled.div`
  padding-bottom: 20px;
`;

export default TextControl;
