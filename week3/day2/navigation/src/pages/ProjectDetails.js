import projectsData from "../projects-data.json";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projectsData.find((e) => e._id === projectId);
    if (found) {
      setProject(found);
    } else {
      setProject(null);
    }
  }, [projectId]);

  return (
    <div>
      <h3>Project Details</h3>
      {!project && <p>Project not found</p>}
      {project && (
        <div>
          <h2>{project.name}</h2>
          <h3>Stack: {project.technologies}</h3>
          <p>{project.description}</p>
        </div>
      )}
      <Link to="/projects">Back</Link>
    </div>
  );
}
