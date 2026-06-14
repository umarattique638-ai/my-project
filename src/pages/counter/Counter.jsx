import React, { useReducer } from "react";
import { useCustomHook } from "../../components/Context/Context";

function Counter() {
  const initialState = {
    counter: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { counter: state.counter + 1 };

      case "desc":
        return { counter: state.counter - 1 };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name } = useCustomHook();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2>{name} </h2>
        <h1 className="text-3xl font-bold mb-6">Counter useReducer </h1>

        <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-lg">
          <button
            onClick={() => dispatch({ type: "desc" })}
            className="px-5 py-2 bg-red-500 text-white text-xl rounded-lg hover:bg-red-600 active:scale-95 transition"
          >
            -
          </button>

          <h2 className="text-4xl font-bold w-16 text-center">
            {state.counter}
          </h2>

          <button
            onClick={() => dispatch({ type: "inc" })}
            className="px-5 py-2 bg-green-500 text-white text-xl rounded-lg hover:bg-green-600 active:scale-95 transition"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
