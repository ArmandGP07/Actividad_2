import { useState } from 'react';
import './App.css';
import { fetchHelloWorld } from './services/HelloWorldService';

function App() {
  const [label, setLabel] = useState("");
  const clickHandler = async () => {
    const result = await fetchHelloWorld();
    setLabel(result);
  };

  return (
    <div className="App">
      <button onClick={() => clickHandler()}>Call API</button>
      {label}
    </div>
  );
}

export default App;