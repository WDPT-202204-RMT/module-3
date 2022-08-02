import { useState } from 'react';

export default function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [flipped, setFlipped] = useState(false);

  return (
    <img
      src={flipped ? imgClicked : img}
      onClick={() => setFlipped(!flipped)}
    />
  );
}
