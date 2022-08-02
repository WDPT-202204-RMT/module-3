import { useEffect, useState } from 'react';

export default function Dice() {
  const [picture, setPicture] = useState();

  useEffect(() => {
    const value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    setPicture(`dice${value}`);
  }, []);

  const roll = () => {
    setPicture('dice-empty.png');
    setTimeout(() => {
      const value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      setPicture(`dice${value}`);
    }, 1000);
  };

  return <img src={`../assets/images/${picture}.png`} onClick={() => roll()} />;
}
