import { Link, useLocation } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const location = useLocation();

  if (location.pathname === "/") return null;
  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} size="3x" color="black" />
      </Link>
    </div>
  );
}
