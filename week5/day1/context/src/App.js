import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import { ThemeContext } from "./context/theme.context";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <main>
          <Page theme={theme} />
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
