import { useEffect, useState } from "react";
import BeerDescription from "../components/BeerDescription";
import { getRandomBeer } from "../utils/api";

export default function BeerRandom() {
  const [loading, setLoading] = useState(true);
  const [beer, setBeer] = useState({});

  useEffect(() => {
    getRandomBeer().then((res) => {
      setBeer(JSON.parse(res.data));
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return <BeerDescription beer={beer} />;
}
