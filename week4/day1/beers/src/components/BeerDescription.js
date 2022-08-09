export default function BeerDescription({ beer }) {
  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <h1>{beer.name}</h1>
        <span>{beer.attenuation_level}</span>
      </div>
      <div>
        <p>{beer.tagline}</p>
        <span>{beer.first_brewed}</span>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}
