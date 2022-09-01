import { Button, Card, Col, Form, Input, message, Row, Select } from "antd";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { createTask, getProjects } from "../utils/api";

export default function TaskCreate() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(JSON.parse(res.data));
      setLoading(false);
    });
  }, []);

  const handleSubmit = (values) => {
    message.loading({
      content: "Creating task...",
      key: "create",
    });
    createTask(values).then(() => {
      message.success({
        content: "Task created",
        key: "create",
      });
    });
  };

  if (loading) return <Spinner />;

  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col>
        <Card title="Create a new task">
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="project"
              name="projectId"
              rules={[{ required: true, message: "please select a project" }]}
            >
              <Select>
                {projects.map((e) => (
                  <Select.Option key={e._id} value={e._id}>
                    {e.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
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
