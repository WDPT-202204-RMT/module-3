import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import createBeer from "../assets/new-beer.png";
import BeerLinkCard from "../components/BeerLinkCard";

export default function Home() {
  return (
    <div>
      <BeerLinkCard title="All Beers" url={beers} link="/beers" />
      <BeerLinkCard title="Random Beer" url={randomBeer} link="/random-beer" />
      <BeerLinkCard title="Create Beer" url={createBeer} link="/new-beer" />
    </div>
  );
}
