import React, { useReducer } from "react";
import {} from "./type";

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
    case "SET_WIDTH":
      return { ...state, width: action.width };

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
