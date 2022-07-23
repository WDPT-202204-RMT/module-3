import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  /*   let count = 0;
  setInterval(() => {
    console.log(count);
  }, 500); */

  const handleMinusButtonClick = () => {
    console.log("decrementing");
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => handleMinusButtonClick()}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default Counter;
