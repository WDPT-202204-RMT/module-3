import { Link } from "react-router-dom";

export default function BeerCard({ beer }) {
  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>Created By: {beer.contributed_by}</p>
      <Link to={`/beers/${beer._id}`}>Learn More</Link>
    </div>
  );
}
