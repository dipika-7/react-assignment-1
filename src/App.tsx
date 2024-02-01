import './App.css';

import React, { useState } from 'react';

import Timer from './components/Timer';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <Weather />
    </div>
  );
}

export default App;
