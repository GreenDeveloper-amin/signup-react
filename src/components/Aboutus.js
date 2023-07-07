import React, { useReducer } from "react";

const Aboutus = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "UP":
        return { ...state, num1: state.num1 + action.amount };
      case "DOWN":
        return { ...state, num1: state.num1 - action.amount };
      case "RESET":
        return initialState;
      case "UP2":
        return { ...state, num2: state.num2 + action.amount };
      case "DOWN2":
        return { ...state, num2: state.num2 - action.amount };
      default:
        return state;
    }
  };

  const initialState = { num1: 0, num2: 0 };

  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-[100vh] flex justify-center items-center text-5xl flex-col space-y-11">
      <div>
        <p>{number.num1}</p>
        <button onClick={() => dispatch({ type: "UP", amount: 2 })}>up</button>
        <br />
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        <br />
        <button onClick={() => dispatch({ type: "DOWN", amount: 12 })}>
          br down
        </button>
      </div>
      <div>
        <br />
        <p>{number.num2}</p>
        <br />
        <button onClick={() => dispatch({ type: "UP2", amount: 5 })}>up</button>
        <br />
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        <br />
        <button onClick={() => dispatch({ type: "DOWN2", amount: 3 })}>
          down
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
