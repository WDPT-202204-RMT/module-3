import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={theme}>
      <Counter />
      <select onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default App;
