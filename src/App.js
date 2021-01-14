import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        Sample React App - Counter
      </header>
      <div>Counter Value: {count} </div>
      <button onClick={() => setCount(count + 1)} >Add one to Counter</button>
      <button onClick={() => setCount(count - 1)}>Subtract one from Counter</button>
    </div>
  );
}

export default App;
