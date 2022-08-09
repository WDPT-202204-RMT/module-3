import { Route, Routes } from "react-router-dom";
import BeerCreate from "./pages/BeerCreate";
import BeerDetails from "./pages/BeerDetails";
import BeerRandom from "./pages/BeerRandom";
import Beers from "./pages/Beers";
import Home from "./pages/Home";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/random-beer" element={<BeerRandom />} />
      <Route path="/new-beer" element={<BeerCreate />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:id" element={<BeerDetails />} />
    </Routes>
  );
}
