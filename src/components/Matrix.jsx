import React, { useState } from "react";

const Matrix = () => {
  const [boxes, setBoxes] = useState(Array(9).fill("white"));
  const [order, setOrder] = useState([]);

  const handleClick = (index) => {
    if (boxes[index] === "white") {
      const newBoxes = [...boxes];
      newBoxes[index] = "green";
      setBoxes(newBoxes);
      setOrder([...order, index]);
    }
  };
  if (order.length === 9) {
    order.forEach((j, i) => {
      setTimeout(() => {
        setBoxes((pre) => {
          let updated = [...pre];
          updated[j] = "orange";
          return updated;
        });
      }, (i + 1) * 400);
    });
  }

  return (
    <>
      <div className="container">
        <h1>Interactive Color Changing Grid in React</h1>
        <p >
          This project is a React-based interactive 3x3 grid, where each box
          changes color when clicked. Initially, all boxes are white, and when
          clicked, they turn green. The sequence of clicked boxes is stored, and
          once all 9 boxes are clicked, they change to orange one by one in the
          same order.
        </p>
      </div>
      <div className="grid">
        {boxes.map((color, index) => (
          <div
            className="box"
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Matrix;
