export default function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${g})`,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
    </div>
  );
}
