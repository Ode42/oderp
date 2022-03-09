import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "../Projects/Projects";
import Home from "../Home";
import Register from "../Authentication/Register";
import Login from "../Projects/Login";

const OdErpRouter = () => {
  return (
    <div className="router">
      <Router>
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default OdErpRouter;
