import React from "react";
import { Container } from "../UI/Container";
import { Icon } from "./Icon";
import "./LangGrid.css";

import cSharpLogo from "../svg-logos/c-sharp.svg";
import htmlLogo from "../svg-logos/html.svg";
import cssLogo from "../svg-logos/css.svg";
import jsLogo from "../svg-logos/js.svg";
import pythonLogo from "../svg-logos/python.svg";
import sqlLogo from "../svg-logos/sql.svg";

export const LangGrid: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Languages</h1>
        <div className="lang-grid">
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={htmlLogo}
            text="HTML5"
          />
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={cssLogo}
            text="CSS3"
          />
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={jsLogo}
            text="JavaScript"
          />
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={cSharpLogo}
            text="C#"
          />
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={pythonLogo}
            text="Python"
          />
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={sqlLogo}
            text="SQL"
          />
        </div>
      </div>
    </Container>
  );
};
