import React from "react";
import "./Elipse.css";

interface Props {
  x?: number;
  className: string;
}
export const Elipse: React.FC<Props> = (x) => {
  const num = 1;

  const style = {
    height: 80 * num,
    width: num * 80,
  };
  return <div className="elipse" style={style}></div>;
};
