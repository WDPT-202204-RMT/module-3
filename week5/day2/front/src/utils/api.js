import { Axios } from "axios";

const client = new Axios({
  baseURL: "http://localhost:5005/api",
});

export function getProjects() {
  const token = localStorage.getItem("project_token");
  return client.get("/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getProject(projectId) {
  const token = localStorage.getItem("project_token");
  return client.get(`/projects/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function deleteProject(projectId) {
  const token = localStorage.getItem("project_token");

  return client.delete(`/projects/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createProject(data) {
  const token = localStorage.getItem("project_token");

  return client.post("/projects", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateProject(projectId, data) {
  const token = localStorage.getItem("project_token");

  return client.put(`/projects/${projectId}`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createTask(data) {
  const token = localStorage.getItem("project_token");

  return client.post("/tasks", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function register(data) {
  return client.post("/auth/signup", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function login(data) {
  return client.post("/auth/login", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function verifyToken(token) {
  return client.get("/auth/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
