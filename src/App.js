import React from 'react';
import './App.css';
import Detector from "./Components/Detector/detector";

function App() {
  return (
    <div className="App">
    <h3>Type card number in order to get the network name for such card</h3>
      <Detector />
    </div>
  );
}

export default App;
