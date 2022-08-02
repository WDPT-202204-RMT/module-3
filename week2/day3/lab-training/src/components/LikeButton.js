import { useState } from 'react';

export default function LikeButton() {
  const [counter, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(counter + 1)}>{counter} Likes</button>
    </div>
  );
}
