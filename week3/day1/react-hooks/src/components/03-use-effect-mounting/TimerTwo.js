import React, { useState, useEffect } from 'react';

function TimerTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerTwo;
