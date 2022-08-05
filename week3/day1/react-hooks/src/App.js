import './App.css';
import Counter from './components/01-use-state/Counter';
import Timer from './components/02-use-state-loop/Timer';
import TimerTwo from './components/03-use-effect-mounting/TimerTwo';
import TimerThree from './components/04-use-effect-unmounting/TimerThree';
import IronbnbList from './components/IronbnbList';
import { useState } from 'react';

function App() {
  // const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button> */}
      {/* {show && <Counter />} */}
      {/* {show && <Timer />} */}
      {/* {show && <TimerTwo />} */}
      {/* {show && <TimerThree />} */}
      <IronbnbList />
    </div>
  );
}

export default App;
