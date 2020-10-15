import React from "react";
import styled from "styled-components";
import { Tabs, Input, Select, InputNumber, Row, Col } from "antd";
const { Option } = Select;

const { TabPane } = Tabs;

function TextControl({
  setTextType,
  Text,
  Text1,
  Text2,
  setText,
  setText1,
  setText2,
  TextSize,
  setTextSize,
}) {
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
      <p>폰트 사이즈</p>
      <Row>
        <Col span={20}>
          <InputNumber
            style={{ width: "100%" }}
            value={TextSize}
            onChange={setTextSize}
          />
        </Col>
        <Col span={4} style={{ fontSize: "20px", padding: "0" }}>
          px
        </Col>
      </Row>

      <br />

      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="한 줄 텍스트" key="1">
          <Row>
            <Input
              placeholder="한 줄 텍스트"
              onChange={(e) => setText(e.target.value)}
              value={Text}
            />
          </Row>
        </TabPane>
        <TabPane tab="두 줄 텍스트" key="2">
          <Input
            placeholder="첫번째 줄 텍스트"
            onChange={(e) => setText1(e.target.value)}
            value={Text1}
          />
          <Input
            placeholder="두번째 줄 텍스트"
            onChange={(e) => setText2(e.target.value)}
            value={Text2}
          />
        </TabPane>
      </Tabs>
    </TextWrap>
  );
}

const TextWrap = styled.div``;

export default TextControl;
