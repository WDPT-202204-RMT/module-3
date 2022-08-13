import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectUpdate from "./pages/ProjectUpdate";
import TaskCreate from "./pages/TaskCreate";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/new" element={<ProjectCreate />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="/projects/:projectId/edit" element={<ProjectUpdate />} />
      <Route path="/task/new" element={<TaskCreate />} />
    </Routes>
  );
}
