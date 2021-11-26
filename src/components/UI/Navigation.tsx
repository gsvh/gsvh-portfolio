import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navigation.css";
import { SocialMedia } from "../grids/SocialMedia";

import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { SovTech } from "../../pages/SovTech";

interface Props {
  className?: string;
}

export const Navigation: React.FC<Props> = () => {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSolid(window.pageYOffset > 100)
      );
    }
  }, []);
  return (
    <Router>
      <div className="layout">
        <div>
          <div className={`header ${solid ? "solid" : ""}`}>
            <span className="logo">gs van heerden</span>

            <ul className="items">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/why-sovtech">why sovtech</Link>
              </li>
            </ul>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/why-sovtech" element={<SovTech />}></Route>
            </Routes>
          </div>
          <div className="footer">
            <SocialMedia />
          </div>
        </div>
      </div>
    </Router>
  );
};
