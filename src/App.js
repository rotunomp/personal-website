import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid p-0 m-0">
        <Router>

          <Route exact path={'/'} component={Mainpage}></Route>

          <Route exact path={'/about'} component={About}></Route>

        </Router>
      </div>

    </div>
  );
}

export default App;
