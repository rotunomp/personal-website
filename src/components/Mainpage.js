import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';

class Mainpage extends React.Component {

    constructor() {
        super();

        // Get the height of the screen so we can have screen-height elements!
        const viewportHeight = window.innerHeight;
        this.state = { screenHeight: viewportHeight };
    }

    render() {
        return (
            <div className="Mainpage">
                <header style={{ height: (this.state.screenHeight - 150) + 'px' }} className="d-flex align-items-center">
                    <div className="row">

                        <ScrollAnimation
                            animateIn={'fadeInUp'}
                            className={'display-1 col-12 text-center'}
                            duration={1}
                            delay={500}
                            animateOnce={true}
                            offset={-1500}
                        >
                            Michael Rotuno
                        </ScrollAnimation>

                        <div className="display-1 col-12 text-center mb-4" >
                            <h4 style={{ color: '#533745' }}>__________________________________</h4>
                        </div>
                        <div className="text-secondary col-12 text-center">
                            Software Engineering | Web Applications
                        </div>

                        <div className={'row divider'}></div>

                        <ScrollAnimation
                            animateIn={'fadeIn'}
                            className={'col-12 d-flex justify-content-center'}
                            duration={1}
                            delay={2000}
                            animateOnce={true}
                            offset={-1500}
                        >
                            <Link className={'btn btn-outline-primary btn-lg mx-2'} to={'/about'}>About me</Link>
                            <Link className={'btn btn-outline-primary btn-lg mx-2'} to={'/projects'}>Projects</Link>
                        </ScrollAnimation>
                    </div>
                </header>
            </div>

        );
    }

}

export default Mainpage;
