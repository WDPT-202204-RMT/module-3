import { Link, Routes } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p>We're a team !</p>
      <Link to="/projects">Our projects</Link>
    </div>
  );
}
