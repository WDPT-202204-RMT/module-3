import { Axios } from "axios";

const client = new Axios({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

export function getBeers() {
  return client.get("/");
}

export function getBeer(id) {
  return client.get(`/${id}`);
}

export function getRandomBeer() {
  return client.get("/random");
}

export function createBeer(body) {
  return client.post("/new", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function search(query) {
  return client.get(`/search?q=${query}`);
}
