import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";
import { getBeers, search } from "../utils/api";

export default function Beers() {
  const [loading, setLoading] = useState(true);

  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBeers, setSearchBeers] = useState([]);

  useEffect(() => {
    getBeers().then((res) => {
      setBeers(JSON.parse(res.data));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      search(searchQuery).then((res) => {
        setSearchBeers(JSON.parse(res.data));
      });
    }
  }, [searchQuery]);

  if (loading)
    return (
      <div>
        <p>loading...</p>
      </div>
    );

  return (
    <div>
      <label>Search Beers</label>
      <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      {searchBeers &&
        searchBeers.map((element) => (
          <BeerCard key={element._id} beer={element} />
        ))}
      {!searchQuery &&
        beers.map((element) => <BeerCard key={element._id} beer={element} />)}
    </div>
  );
}
