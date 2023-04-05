import React from "react";
import { useSelector } from "react-redux";
import { setDisplay ,setExpression } from "./Redux/ForState/DisplayState";
import { dispatch } from "./Redux/store";

function FrontDis() {
  // For Reducers
  const expression = useSelector((state) => state.Display.Expression);
  console.log(expression, "expression");

  const handleClick = (value) => {
    dispatch(setDisplay(value));
    dispatch(setExpression([...expression, value]));
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          case "%":
            return (acc = (acc * 100) / array[index + 1]);
          default:
            return acc;
        }
      });
    dispatch(setDisplay(result));
    dispatch(setExpression(""));
  };

  const reset = () => {
    dispatch(setExpression([]));
    dispatch(setDisplay(""));
  };

  return (
      <div className="button11">
        <div className="">
          <button className="btn-c" onClick={reset}>
            C
          </button>
          <button className="" onClick={() => handleClick("%")}>
            %
          </button>
          <button onClick={() => handleClick("÷")}>÷</button>
        </div>
        <div className="">
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick("x")}>x</button>
        </div>
        <div className="">
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        </div>
        <div className="">
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="">
        <button onClick={() => handleClick(0)}>0</button>
        <button className="btn-eq" onClick={() => handleResult()}>=</button>
        </div>
      </div>
  );
}

export default FrontDis;
