import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "40px",
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <ThemeSwitcher />
    </div>
  );
}
