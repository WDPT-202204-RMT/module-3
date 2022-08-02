export default function NumbersTable(props) {
  const { limit } = props;
  const generateSquares = () => {
    const res = [];

    for (let i = 1; i <= limit; i++) {
      res.push(
        <div
          style={{
            backgroundColor: i % 2 === 0 ? 'red' : 'white',
            width: '50px',
            height: '50px',
          }}
        >
          {i}
        </div>
      );
    }
    return res;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>{generateSquares()}</div>
  );
}
