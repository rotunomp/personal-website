import React from 'react';
import githubLogo from "../resources/GitHub-Mark-32px.png"
import emailIcon from "../resources/email-icon.png"
import resumeIcon from "../resources/document-32.png"

class Mainpage extends React.Component {

    constructor() {
        super();

        // Get the height of the screen so we can have screen-height elements!
        const viewportHeight = window.innerHeight;
        this.state = {screenHeight: viewportHeight};
    }

    render() {
        return (
            <div className="Mainpage">    
                <header style={{height: this.state.screenHeight + 'px'}} className="d-flex align-items-center">
                    <div className="row">
                        <div className="display-1 col-12 text-center">
                            Michael Rotuno 
                        </div>
                        <div className="display-1 col-12 text-center mb-4" >
                            <h4 style={{color: '#533745'}}>__________________________________</h4>
                        </div>
                        <div className="text-secondary col-12 text-center">
                            Software Engineering | Web Applications
                        </div>
                        <div className="my-4"></div>
                        <div className="my-4"></div>
                    </div>
                </header>

                <hr></hr>
                <footer className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <a href="https://github.com/rotunomp" className="mx-1">
                            <img src={githubLogo}></img>
                        </a>
                        <a href="mailto:michaelprotuno@gmail.com" className="mx-1">
                            <img src={emailIcon} width="32" height="36"></img>
                        </a>
                        <a href="https://docs.google.com/document/d/1ispJ4wgyQmtdJAyH1gPmtCeE8pAF-YhsRdpTpl-wKqs/edit?usp=sharing" className="mx-1">
                        <img src={resumeIcon}></img>
                        </a>
                    </div>
                </footer>
            </div>
        
        );    
    }

  }
  
  export default Mainpage;
  