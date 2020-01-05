import React from 'react';
import "../resources/vines.png";

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
    
                <header style={{height: this.state.screenHeight + 'px'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="display-1 col-12 text-center">
                            Michael Rotuno 
                        </div>
                        <div className="display-1 col-1 text-center">
                            <hr/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="text-secondary col-12 text-center">
                            Software Engineering | Web Design
                        </div>
                    </div>
                </header>
    
    
                <div 
                    className="jumbotron"
                    style={{
                        backgroundColor: '#533745',
                    }}
                ></div>
            </div>
        
        );    
    }

  }
  
  export default Mainpage;
  