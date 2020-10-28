import React, { useReducer } from "react";
import { SET_DOWNLOAD_URL, SET_BACKGROUND_COLOR } from "./type";

export const CanvasContext = React.createContext();

const initialState = {
  BackgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
  DownLoadURL: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DOWNLOAD_URL:
      return {
        ...state,
        DownLoadURL: action.DownLoadURL,
      };
    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        BackgroundColor: action.BackgroundColor,
      };
    default:
      throw new Error();
  }
};

const CanvasProvider = ({ children }) => {
  const [state, canvasDispatch] = useReducer(reducer, initialState);
  return (
    <CanvasContext.Provider
      value={{
        BackgroundColor: state.BackgroundColor,
        DownLoadURL: state.DownLoadURL,
        canvasDispatch,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
