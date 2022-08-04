import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>HomePage</p>

      <Link to="/about">About Us</Link>
    </div>
  );
}
