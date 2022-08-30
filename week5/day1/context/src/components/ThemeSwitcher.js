import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Turn {theme === "light" ? "off" : "on"} the lights
    </button>
  );
}
