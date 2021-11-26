import React from "react";
import git from "../svg-logos/git.svg";
import insta from "../svg-logos/insta.svg";
import link from "../svg-logos/link.svg";
import { Icon } from "./Icon";
import "./SocialMedia.css";

export const SocialMedia: React.FC = () => {
  return (
    <div className="social">
      <a href="https://github.com/gsvh">
        <Icon
          containerClass="smallCon"
          iconClass="smallIcon"
          imageClass="smallImage"
          icon={git}
        />
      </a>

      <a href="https://www.linkedin.com/in/george-sebastiaan-van-heerden-62ab54214">
        <Icon
          containerClass="smallCon"
          iconClass="smallIcon"
          imageClass="smallImage"
          icon={link}
        />
      </a>
      <a href="https://www.instagram.com/georgesvanheerden/">
        <Icon
          containerClass="smallCon"
          iconClass="smallIcon"
          imageClass="smallImage"
          icon={insta}
        />
      </a>
    </div>
  );
};
