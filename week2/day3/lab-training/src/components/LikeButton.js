import { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

export default function LikeButton() {
  const [counter, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div>
      <button
        style={{ backgroundColor: colors[colorIndex] }}
        onClick={() => {
          setCount(counter + 1);
          if (colorIndex === colors.length - 1) {
            setColorIndex(0);
          } else {
            setColorIndex(colorIndex + 1);
          }
        }}
      >
        {counter} Likes
      </button>
    </div>
  );
}
