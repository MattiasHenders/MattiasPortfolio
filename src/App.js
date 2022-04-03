import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import Work from "./components/Work/Work";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Work/Resume";
import Preloader from "../src/components/Pre";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import loadable from '@loadable/component'
// const React = loadable(() => import("react"));
// const { useState, useEffect } = loadable(() => import("react"));
const Navbar = loadable(() => import("./components/Navbar"));
const Home = loadable(() => import("./components/Home/Home"));
const Work = loadable(() => import("./components/Work/Work"));
const About = loadable(() => import("./components/About/About"));
const Projects = loadable(() => import("./components/Projects/Projects"));
const Footer = loadable(() => import("./components/Footer"));
const Resume = loadable(() => import("./components/Work/Resume"));
const ScrollToTop = loadable(() => import("./components/ScrollToTop"));

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#work" element={<Work />} />
          <Route path="/#project" element={<Projects />} />
          <Route path="/#education" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
