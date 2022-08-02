import { useState } from 'react';

export default function Carousel(props) {
  const { images } = props;
  const [index, setIndex] = useState(0);

  return (
    <div>
      <button onClick={() => setIndex(index > 0 ? index - 1 : 0)}>
        Previous
      </button>
      <img src={images[index]} />
      <button
        onClick={() => setIndex(index < images.length - 1 ? index + 1 : index)}
      >
        Next
      </button>
    </div>
  );
}
