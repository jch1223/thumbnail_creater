import React, { useReducer } from "react";
import {
  SET_TEXT_TYPE,
  SET_ONELINE_TEXT,
  SET_TWOLINE_TEXT1,
  SET_TWOLINE_TEXT2,
  SET_TEXT_SIZE,
} from "./type";

export const TextContext = React.createContext();

const initialState = {
  TextType: "one-line",
  Text: "텍스트를 입력하세요",
  Text1: "텍스트를",
  Text2: "입력하세요",
  TextSize: "50",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TEXT_TYPE:
      return { ...state, TextType: action.TextType };
    case SET_ONELINE_TEXT:
      return { ...state, Text: action.Text };
    case SET_TWOLINE_TEXT1:
      return { ...state, Text1: action.Text };
    case SET_TWOLINE_TEXT2:
      return { ...state, Text2: action.Text };
    case SET_TEXT_SIZE:
      return { ...state, TextSize: action.TextSize };

    default:
      throw new Error();
  }
};

const TextProvider = ({ children }) => {
  const [state, textDispatch] = useReducer(reducer, initialState);
  return (
    <TextContext.Provider
      value={{
        TextType: state.TextType,
        Text: state.Text,
        Text1: state.Text1,
        Text2: state.Text2,
        TextSize: state.TextSize,
        textDispatch,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
