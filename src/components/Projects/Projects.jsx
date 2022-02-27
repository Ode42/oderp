import { useState, useEffect } from "react";

const Projects = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchMessage = async () => {
      const data = await fetch("http://localhost:5000/api/projects")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMessage(data);
        });
    };
    fetchMessage().catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>Projects page</h1>
    </div>
  );
};

export default Projects;
