import { Route, Routes } from "react-router-dom";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectList from "./pages/ProjectList";
import ProjectUpdate from "./pages/ProjectUpdate";
import Register from "./pages/Register";
import TaskCreate from "./pages/TaskCreate";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={
          <IsAnon>
            <Register />
          </IsAnon>
        }
      />
      <Route
        path="/login"
        element={
          <IsAnon>
            <Login />
          </IsAnon>
        }
      />
      <Route
        path="/projects"
        element={
          <IsPrivate>
            <ProjectList />
          </IsPrivate>
        }
      />
      <Route
        path="/projects/new"
        element={
          <IsPrivate>
            <ProjectCreate />
          </IsPrivate>
        }
      />
      <Route
        path="/projects/:projectId"
        element={
          <IsPrivate>
            <ProjectDetails />
          </IsPrivate>
        }
      />
      <Route
        path="/projects/:projectId/edit"
        element={
          <IsPrivate>
            <ProjectUpdate />
          </IsPrivate>
        }
      />
      <Route
        path="/task/new"
        element={
          <IsPrivate>
            <TaskCreate />
          </IsPrivate>
        }
      />
    </Routes>
  );
}
