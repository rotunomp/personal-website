import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

import githubLogo from "./resources/GitHub-Mark-32px.png"
import emailIcon from "./resources/email-icon.png"
import resumeIcon from "./resources/document-32.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid p-0 m-0">
        <Router>

          <Route exact path={'/'} component={Mainpage}></Route>

          <Route exact path={'/about'} component={About}></Route>

          <Route exact path={'/projects'} component={Projects}></Route>

        </Router>

        <hr></hr>
        <footer className="d-flex justify-content-center align-items-center">
            <div className="">
                <a href="https://github.com/rotunomp" className="mx-1" target="_blank">
                    <img src={githubLogo}></img>
                </a>
                <a href="mailto:michaelprotuno@gmail.com" className="mx-1" target="_blank">
                    <img src={emailIcon} width="32" height="36"></img>
                </a>
                <a href="https://docs.google.com/document/d/18h4GvC0FljTtjrzpG0RZRxyFqXrtZVVi8o4VvVcFoBg/edit?usp=sharing" className="mx-1" target="_blank">
                    <img src={resumeIcon}></img>
                </a>
            </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
