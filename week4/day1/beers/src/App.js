import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Navigation />
      </main>
      <footer>&copy; {new Date().getFullYear()}</footer>
    </BrowserRouter>
  );
}

export default App;
