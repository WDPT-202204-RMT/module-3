import "./header.css";

function lower(value) {
  return value.toLowerCase();
}

function Header() {
  let name = "Matteo";

  const toLower = lower(name);
  return (
    <header>
      <nav>
        <h2>{toLower}</h2>
      </nav>
    </header>
  );
}

export default Header;
