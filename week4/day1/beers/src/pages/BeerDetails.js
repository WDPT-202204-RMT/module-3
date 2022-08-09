import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDescription from "../components/BeerDescription";
import { getBeer } from "../utils/api";

export default function BeerDetails() {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeer(id).then((res) => {
      console.log(res.data);
      setBeer(JSON.parse(res.data));
      setLoading(false);
    });
  }, [id]);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return <BeerDescription beer={beer} />;
}
