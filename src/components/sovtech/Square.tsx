import React from "react";
import "./Square.css";

interface Props {
  className: string;
}
export const Square: React.FC<Props> = () => {
  return <div className="square"></div>;
};
