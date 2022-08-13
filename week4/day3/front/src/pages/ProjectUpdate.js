import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getProject, updateProject } from "../utils/api";

export default function ProjectUpdate() {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const navigate = useNavigate();
  const { projectId } = useParams();
  useEffect(() => {
    getProject(projectId).then((res) => {
      setProject(JSON.parse(res.data));
      setLoading(false);
    });
  }, [projectId]);

  const handleSubmit = (values) => {
    message.loading({ content: "updating project", key: "creation" });
    updateProject(projectId, values).then((res) => {
      const data = JSON.parse(res.data);
      message.success({
        content: "project updated",
        key: "creation",
      });
      navigate(`/projects/${data._id}`);
    });
  };

  if (loading) return <Spinner />;

  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col>
        <Card title={`Update project ${project.title}`}>
          <Form
            onFinish={handleSubmit}
            initialValues={{
              title: project.title,
              description: project.description,
            }}
          >
            <Form.Item
              label="title"
              name="title"
              rules={[{ required: true, message: "please input a title" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="description"
              name="description"
              rules={[
                { required: true, message: "please input a description" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
