import { Row, Col, message } from "antd";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Spinner from "../components/Spinner";
import { getProjects, deleteProject } from "../utils/api";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeProject = (id) => {
    message.loading({
      content: "deleting project...",
      key: "del",
    });
    deleteProject(id).then(() => {
      const old = projects;

      setProjects(old.filter((e) => e._id !== id));
      message.success({
        content: "project deleted",
        key: "del",
      });
    });
  };

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(JSON.parse(res.data));
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <Row gutter={4}>
        {projects.map((e) => (
          <Col key={e._id} span={4}>
            <ProjectCard
              project={e}
              handleDeleteConfirm={() => removeProject(e._id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
