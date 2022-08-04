import "./App.css";
import projectsData from "./projects-data.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import ProjectDetails from "./pages/ProjectDetails";
import Search from "./pages/Search";

function App() {
  const [projects, setProjects] = useState(projectsData);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
