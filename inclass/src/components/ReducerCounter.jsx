import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    // case "increment5":
    //   console.log(action);
    //   return state + action.payload;
    // case "decrement5":
    //   console.log(action);
    //   return state - action.payload;
    default:
      return state;
  }
};

export default function ReducerCounter() {
  const [counter, dispatch] = useReducer(reducer, 0);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: count });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: count });
  };

  // const handleIncrement5 = () => {
  //   dispatch({ type: "increment5", payload: 5 });
  // };

  // const handleDecrement5 = () => {
  //   dispatch({ type: "decrement5", payload: 5 });
  // };

  return (
    <div className="ReducerCounter componentBox">
      <select value={count} 
        onChange={(e) => setCount(parseInt(e.target.value))}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
      </select>
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
      {/* <button onClick={handleIncrement5}>Increment 5</button>
      <button onClick={handleDecrement5}>Decrement 5</button> */}
    </div>
  );
}
