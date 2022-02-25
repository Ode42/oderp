import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "../Projects";
import Home from "../Home";

const OdErpRouter = () => {
  return (
    <div className="router">
      <Router>
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default OdErpRouter;
