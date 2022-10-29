import React, { useContext } from "react";
import { ThemeContext } from "./context";

import "./App.css";
import Experience from "./Components/Experience/Experience";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioDetails from "./Components/PortfolioDetails/PortfolioDetails";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`App ${darkMode ? "App__dark" : "App__light"}`}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Intro />
                <Services />
                <Experience />
                <Works />
                <Portfolio />
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="project-details"
            element={
              <>
                <Navbar />
                <PortfolioDetails />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
