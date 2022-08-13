import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Collapse,
  message,
  Popconfirm,
  Row,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { deleteProject, getProject } from "../utils/api";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProject(projectId).then((res) => {
      setProject(JSON.parse(res.data));
      setLoading(false);
    });
  }, [projectId]);

  const handleConfirm = () => {
    message.loading({
      content: "Deleting project...",
      key: "delete",
    });
    deleteProject(projectId).then(() => {
      message.success({
        content: "Project deleted",
        key: "delete",
      });
      navigate("/", { replace: true });
    });
  };

  if (loading) return <Spinner />;

  return (
    <div>
      <Row align="middle" justify="space-between">
        <Col>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography.Title>{project.title}</Typography.Title>
            <Button
              onClick={() => navigate(`/projects/${project._id}/edit`)}
              icon={<EditOutlined />}
            />
          </div>
        </Col>
        <Col>
          <Popconfirm
            title={`are you sure you want to delete project ${project.title}?`}
            okText="yes"
            cancelText="no"
            onConfirm={handleConfirm}
            onCancel={() => {}}
          >
            <Button
              size="large"
              shape="circle"
              type="primary"
              danger
              icon={<DeleteFilled />}
            ></Button>
          </Popconfirm>
        </Col>
      </Row>
      <Typography.Text>{project.description}</Typography.Text>

      {project.tasks.length > 0 && (
        <Collapse accordion>
          {project.tasks.map((e) => (
            <Collapse.Panel key={e._id} header={e.title}>
              <Typography.Text>{e.description}</Typography.Text>
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
}
