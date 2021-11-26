import React from "react";
import "./Triangle.css";
interface Props {
  className: string;
}

export const Triangle: React.FC<Props> = () => {
  return <div className="triangle"></div>;
};
