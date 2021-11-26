import React from "react";
import { useState } from "react";
import "./SovTech.css";
import { Square } from "../shapes/Square";
import { Triangle } from "../shapes/Triangle";
import { Circle } from "../shapes/Circle";

export const SovTech: React.FC = () => {
  const [shapes, setShapes] = useState<any[]>([]);

  const shapeProp = {
    className: "pos",
    size: 4,
    speed: 4,
    delay: 0,
    xPosition: 50,
  };
  // const shapes = [<Circle {...shapeProp} />]; //array with one element rendered off screen

  const addNewShape = () => {
    shapeProp.xPosition = Math.random() * 100;
    shapeProp.size = 1 + Math.random() * 3;
    shapeProp.speed = 5 + Math.random() * 5;
    shapeProp.delay = Math.random() * 3;

    const selectShape = [
      <Circle {...shapeProp} />,
      <Square {...shapeProp} />,
      <Triangle {...shapeProp} />,
    ];

    const newShape = selectShape[Math.floor(Math.random() * 3)];

    setShapes([...shapes, newShape]);
  };

  return (
    <div>
      <div className="main">
        {shapes}
        <div className="why-sovtech">
          <h1>why sovtech?</h1>
          <h2>
            the sovtech spex. #smile. the fact that such a big company values
            good people over highly skilled unpleasant people. good people are
            hard to find, not because they are scarce, but because they are
            overshadowed by big talkers and loud pretenders. it's beautiful to
            see. #giveash*t. nothing is more important than truth. sometimes
            standing for what's right means standing with only a few, and i
            would be proud to stand amongst you.
          </h2>

          <h3>spam the button</h3>
        </div>

        <div className="button-big-box">
          <div className="button-box">
            <button className="button" onClick={addNewShape}>
              <span>△ □ ○</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
