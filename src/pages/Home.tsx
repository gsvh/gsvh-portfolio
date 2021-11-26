import React from "react";
import { Container } from "../components/UI/Container";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <Container>
      <div className="home-left"></div>
      <div className="home-right">
        <div className="home-text">
          <h1>Welcome to my portfolio</h1>
          <h2>George S.</h2>
          <h3>van Heerden</h3>
          <h4>Software Developer</h4>
        </div>
      </div>
    </Container>
  );
};
