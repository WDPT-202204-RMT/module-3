import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { createProject } from "../utils/api";

export default function ProjectCreate() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    message.loading({ content: "creating project", key: "creation" });
    createProject(values).then((res) => {
      const data = JSON.parse(res.data);
      message.success({
        content: "project created",
        key: "creation",
      });
      navigate(`/projects/${data._id}`);
    });
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col>
        <Card title="Create a new project">
          <Form onFinish={handleSubmit}>
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
