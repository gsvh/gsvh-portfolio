import React from "react";
import { Container } from "../UI/Container";
import { Icon } from "./Icon";
import "./TechGrid.css";

import azureLogo from "../svg-logos/azure.svg";
import reactLogo from "../svg-logos/react.svg";
import aspLogo from "../svg-logos/dotnet.svg";

export const TechGrid: React.FC = () => {
  return (
    <Container>
      <div className="card">
        <h1>Technologies</h1>
        <div className="tech-grid">
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={reactLogo}
            text="React"
          />
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={aspLogo}
            text="ASP.Net"
          />
          <Icon
            containerClass="con"
            iconClass="icon"
            imageClass="image"
            icon={azureLogo}
            text="Azure"
          />
        </div>
      </div>
    </Container>
  );
};
