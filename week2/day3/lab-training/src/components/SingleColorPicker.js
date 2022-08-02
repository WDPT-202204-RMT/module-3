export default function SingleColorPicker(props) {
  const { color, value, onChange } = props;

  const getBgColorValue = () => {
    switch (color) {
      case 'r':
        return `rgb(${value}, 0, 0)`;
      case 'g':
        return `rgb(0, ${value}, 0)`;
      case 'b':
        return `rgb(0, 0 , ${value})`;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: getBgColorValue(),
        }}
      ></div>
      <p>{color}</p>
      <input value={value} onChange={onChange} type="number" />
    </div>
  );
}
