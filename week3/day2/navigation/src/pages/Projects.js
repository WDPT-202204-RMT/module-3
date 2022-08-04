import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("updating projects");
    setProjects(props.projects);
  }, [props.projects]);

  return (
    <div>
      <p>Our Projects</p>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
            <Link to={`/projects/${project._id}`}>Learn More</Link>
          </div>
        );
      })}
    </div>
  );
}
