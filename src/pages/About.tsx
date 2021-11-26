import React from "react";
import { Container } from "../components/UI/Container";
import { LangGrid } from "../components/grids/LangGrid";
import { TechGrid } from "../components/grids/TechGrid";
import "./About.css";
import george from "../images/birder-george.jpg";
import cv from "../components/svg-logos/resume.svg";
import birdwatching from "../images/birdwatching.jpg";
import music from "../images/music.jpg";
import chess from "../images/chess.jpg";

export const About: React.FC = () => {
  return (
    <div className="body">
      <Container>
        <div className="sub-cont">
          <img src={george} alt="me" />
        </div>
        <div className="sub-header">
          <h1>Hi there</h1>
          <h2>I'm</h2>
          <p>George</p>
          <h2>,</h2>
          <h3> a creative </h3>
          <h4>and innovative </h4>
          <h5>software developer from South Africa.</h5>
          <h6>
            I am a critical thinker and I love solving complex problems. I'm
            always up for a challenge and adore learning new skills.
          </h6>
        </div>
      </Container>
      <div className="skills">
        <LangGrid />

        <div className="tech-column">
          <TechGrid />
          <div className="cv">
            <h1>have a look at my resume (it's green!) </h1>
            <a href="https://drive.google.com/file/d/1kHnzgrYUrw1mmpkDSk5fwg3LHBxZ7Y7Q/view?usp=sharing">
              <img src={cv} alt="My Resume" />
            </a>
          </div>
        </div>
      </div>
      <div className="hobbies">
        <h1>things i enjoy doing in my free time</h1>
        <div className="hobbies-left"></div>
        <div className="hobbies-right">
          <div className="hobbies-cont">
            <img src={birdwatching} alt="birdwatching" />
            <h2>bird watching</h2>
          </div>
          <div className="hobbies-cont">
            <img src={music} alt="playing music" />
            <h2>playing and making music</h2>
          </div>
          <div className="hobbies-cont">
            <img src={chess} alt="playing chess" />
            <h2>playing chess</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

/* <div className="pygame">
        <iframe
          title="golf"
          width="100%"
          height="500px"
          src="https://replit.com/@George-Sebasti1/Golf#main.py?embed=true"
        ></iframe>
      </div> */
