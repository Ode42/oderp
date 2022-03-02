import React, { useState, useEffect } from "react";
import "./../../styles/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState("");
  const fetchProjects = () => {
    fetch("http://localhost:5000/api/projects/all")
      .catch((error) => console.error(error))
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  };
  useEffect(() => {
    fetchProjects();
    console.log(projects[0]);
  }, []);
  return (
    <div className="projects-page">
      <h1>Projects page</h1>
    </div>
  );
};

export default Projects;
