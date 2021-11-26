import React from "react";
import "./Icon.css";

interface Props {
  containerClass: string;
  iconClass: string;
  imageClass: string;
  icon: string;
  text?: string;
}

export const Icon: React.FC<Props> = ({
  containerClass,
  iconClass,
  imageClass,
  icon,
  text,
}) => {
  return (
    <div className={containerClass}>
      <div className={iconClass}>
        <img className={imageClass} src={icon} alt={text} />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};
