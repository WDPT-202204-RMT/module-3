export default function Random(props) {
  const { min, max } = props;

  const getValue = () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div style={{ border: '1px solid black' }}>
      <p>
        Random value between {min} and {max} ={'>'} {getValue()}
      </p>
    </div>
  );
}
