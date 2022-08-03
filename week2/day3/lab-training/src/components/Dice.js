import { useEffect, useState } from 'react';
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

export default function Dice() {
  const [picture, setPicture] = useState();
  const dices=[dice1, dice2, dice3, dice4, dice5, dice6]


  useEffect(() => {
    const value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    setPicture(dices[value]);
  }, []);

  const roll = () => {
    setPicture(dice0);
    setTimeout(() => {
      const value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      setPicture(dices[value]);
    }, 1000);
  };

  return <img src={picture} onClick={() => roll()} />;
}
