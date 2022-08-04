import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [place, setPlace] = useState("");

  useEffect(() => {
    const oldPlace = searchParams.get("place");
    console.log(oldPlace);
    if (oldPlace) {
      setPlace(oldPlace);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ place });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
