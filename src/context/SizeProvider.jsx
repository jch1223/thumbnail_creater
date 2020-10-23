import React, { useReducer } from "react";

export const SizeContext = React.createContext();

const initialState = {
  width: 500,
  height: 500,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WIDTH":
      return { ...state, width: action.width };
    case "SET_HEIGHT":
      return { ...state, height: action.height };

    default:
      throw new Error();
  }
};

const SizeProvider = ({ children }) => {
  const [state, sizeDispatch] = useReducer(reducer, initialState);

  return (
    <>
      <SizeContext.Provider
        value={{
          width: state.width,
          height: state.height,
          sizeDispatch,
        }}
      >
        {children}
      </SizeContext.Provider>
    </>
  );
};

export default SizeProvider;
