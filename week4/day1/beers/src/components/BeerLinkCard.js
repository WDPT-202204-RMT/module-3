import { Link } from "react-router-dom";

export default function BeerLinkCard({ url, title, link }) {
  return (
    <div>
      <img src={url} alt="beers" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam
        donec adipiscing tristique.
      </p>
      <Link to={link}>Learn More</Link>
    </div>
  );
}
