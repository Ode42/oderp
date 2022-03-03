import React, { useState, useEffect } from "react";
import "./../../styles/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects/all")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProjects(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading... </div>;
  } else {
    return (
      <div className="projects-page">
        <div className="projects-info">
          <h1>Projects page</h1>
        </div>
        <div className="projects">
          {projects.map((project) => {
            return (
              <div className="project" key={project.project_id}>
                <p>{project.project_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Projects;
