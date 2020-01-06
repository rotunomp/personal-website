import React from 'react';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid mt-1">
        <Mainpage/>
      </div>

    </div>
  );
}

export default App;
