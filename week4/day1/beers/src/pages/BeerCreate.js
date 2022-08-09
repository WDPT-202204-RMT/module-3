import { useState } from "react";
import { createBeer } from "../utils/api";

export default function BeerCreate() {
  const [data, setData] = useState({});

  const handleChange = (name, value) => {
    const old = { ...data };
    old[name] = value;
    setData(old);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBeer(data).then((res) => {
      alert("beer created");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <label>Tagline</label>
        <input
          type="text"
          onChange={(e) => handleChange("tagline", e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <label>First Brewed</label>
        <input
          type="text"
          onChange={(e) => handleChange("first_brewed", e.target.value)}
        />
        <label>Brewers tips</label>
        <input
          type="text"
          onChange={(e) => handleChange("brewers_tips", e.target.value)}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          onChange={(e) =>
            handleChange("attenuation_level", parseInt(e.target.value))
          }
        />
        <label>Contributed By</label>
        <input
          type="text"
          onChange={(e) => handleChange("contributed_by", e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
