import React from "react";
import "./Container.css";

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = (props, className) => {
  return <div className="container">{props.children}</div>;
};
