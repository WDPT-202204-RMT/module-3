import {
  DisconnectOutlined,
  FileFilled,
  FolderFilled,
  HomeFilled,
  SnippetsFilled,
  UnlockOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu, message } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  return (
    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home" icon={<HomeFilled />} onClick={() => navigate("/")}>
        Home
      </Menu.Item>
      {isLoggedIn && (
        <>
          <Menu.Item
            key="projects"
            icon={<FolderFilled />}
            onClick={() => navigate("/projects")}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            key="project"
            icon={<FileFilled />}
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
          <Menu.Item
            key="logout"
            icon={<DisconnectOutlined />}
            onClick={async () => {
              message.info(`Goodbye ${user.name}`);
              await logOutUser();
              navigate("/");
            }}
          >
            Logout
          </Menu.Item>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Menu.Item
            key="register"
            icon={<UserAddOutlined />}
            onClick={() => navigate("/register")}
          >
            Register
          </Menu.Item>
          <Menu.Item
            key="login"
            icon={<UnlockOutlined />}
            onClick={() => navigate("/login")}
          >
            Login
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}
