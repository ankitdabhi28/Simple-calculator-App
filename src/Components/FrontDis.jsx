import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setAnyState } from "./Redux/ForState/AnyState";
import { dispatch } from "./Redux/store";

function FrontDis() {
  dispatch(setAnyState("hello AD"));
  const data = useSelector((state) => state.AnyState.AnyState);
  console.log(data, "data");

  // asdfghjkl
  const [display, setDisplay] = useState("");
  console.log(display, "display");
  const [expression, setExpression] = useState([]);
  console.log(expression, "expression");

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
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
    setDisplay(result);
    setExpression("");
  };

  const reset = () => {
    setExpression([]);
    setDisplay("");
  };

  return (
    <div>
      FrontDis Component
      <div className="App">
        <h3>{display}</h3>

        <span>{expression}</span>

        <section className="panel">
          <section>
            <button onClick={reset}>C</button>
            <button onClick={() => handleClick("%")}>%</button>
            <button onClick={() => handleClick("÷")}>÷</button>
            <br />
            <button onClick={() => handleClick(7)}>7</button>
            <button onClick={() => handleClick(8)}>8</button>
            <button onClick={() => handleClick(9)}>9</button>
            <button onClick={() => handleClick("x")}>x</button>
            <br />
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>
            <button onClick={() => handleClick(6)}>6</button>
            <button onClick={() => handleClick("-")}>-</button>
            <br />
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick("+")}>+</button>
            <br />
            <button onClick={() => handleClick(0)}>0</button>
            <button onClick={() => handleResult()}>=</button>
          </section>
        </section>
      </div>
    </div>
  );
}

export default FrontDis;
