export default function Page({ theme }) {
  return (
    <div
      style={{
        height: "100%",
        background: theme === "light" ? "cyan" : "darkgrey",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <p>this is how prop drilling is done</p>
    </div>
  );
}
