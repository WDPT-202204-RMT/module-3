import { Axios } from "axios";

const client = new Axios({
  baseURL: "http://localhost:5005/api",
});

export function getProjects() {
  return client.get("/projects");
}

export function getProject(projectId) {
  return client.get(`/projects/${projectId}`);
}

export function deleteProject(projectId) {
  return client.delete(`/projects/${projectId}`);
}

export function createProject(data) {
  return client.post("/projects", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function updateProject(projectId, data) {
  return client.put(`/projects/${projectId}`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function createTask(data) {
  return client.post("/tasks", JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
