import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0)
  return (
    <div className="App">
      <button onClick = {() => setCounter(counter+1)}>Incrament</button>
        <span>{counter}</span>
      <button onClick = {() => setCounter(counter-1)}>Decrament</button>
    </div>
  );
}

export default App;