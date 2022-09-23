import { Button, Card, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project, handleDeleteConfirm }) {
  const navigate = useNavigate();

  return (
    <Card title={project.title}>
      <p>{project.description}</p>
      <Button
        onClick={() => navigate(`/projects/${project._id}`)}
        type="primary"
      >
        Details
      </Button>
      <Button onClick={() => navigate(`/projects/${project._id}/edit`)}>
        Edit
      </Button>
      <Popconfirm
        title={`are you sure you want to delete project ${project.title}?`}
        okText="yes"
        cancelText="no"
        onConfirm={() => handleDeleteConfirm()}
        onCancel={() => {}}
      >
        <Button type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
    </Card>
  );
}
