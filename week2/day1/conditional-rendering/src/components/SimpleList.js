function SimpleList(props) {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      {props.red && <li style={{ backgroundColor: "red" }}>4</li>}
      {props.red ? (
        <li style={{ fontWeight: "bold" }}>5</li>
      ) : (
        <p>No more items</p>
      )}
    </ul>
  );
}

export default SimpleList;
