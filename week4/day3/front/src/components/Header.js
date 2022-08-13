import { FolderFilled, HomeFilled, SnippetsFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home" icon={<HomeFilled />} onClick={() => navigate("/")}>
        Home
      </Menu.Item>
      <Menu.Item
        key="project"
        icon={<FolderFilled />}
        onClick={() => navigate("/projects/new")}
      >
        Create Project
      </Menu.Item>
      <Menu.Item
        key="task"
        icon={<SnippetsFilled />}
        onClick={() => navigate("/task/new")}
      >
        Create Task
      </Menu.Item>
    </Menu>
  );
}
