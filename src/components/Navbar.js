import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/">Home</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/projects">Projects <span className="sr-only">(current)</span></a>
                </li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default Navbar;
  