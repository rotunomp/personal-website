import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import bicycle from "../resources/Bicycle.png"
import alarm from "../resources/alarm-clock.png"
import botify from "../resources/Botify-logo.png"
import papers from "../resources/papers.png"
import laptop from "../resources/laptop-transparent-png-18.png"
// import bicycle from "../resources/Bicycle.png"


class Projects extends React.Component {

    constructor() {
        super();

        // Get the height of the screen so we can have screen-height elements!
        const viewportHeight = window.innerHeight;
        this.state = { screenHeight: viewportHeight };
    }

    render() {
        return (
            <div className="Projects">
                <div className={'row'}>
                    <div className={'col-1 col-lg-2'}></div>
                    <div className={'col-10 col-lg-8'}>
                        <div className={'row d-flex align-items-stretch'}>

                            {/* 1 */}
                            <div className={'col-12 col-sm-12 col-md-8 mt-4'}>
                                <a href={'https://github.com/Discord-Botify'} target={'_blank'}>
                                <div className={'card'}>
                                    <img src={botify} className={'card-img-top p-4 m-3'}></img>
                                    <div class={'card-img-overlay h2'}>Botify</div>
                                </div>
                                </a>
                            </div>

                            {/* 2 and 3 */}
                            <div className={'col-12 col-sm-4 col-md-4'}>
                                <div className={'row'}>
                                    <div className={'col-12 mt-4'}>
                                        <a href={'https://github.com/rotunomp/ECE387_alarm_clock'} target={'_blank'}>
                                        <div className={'card'}>
                                            <img src={alarm} className={'card-img-top p-4'}></img>
                                            <div class={'card-img-overlay text-small-card'}>RasPi Alarm Clock</div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className={'col-12 mt-4 '}>
                                        <a href={'https://github.com/rotunomp/personal-website'} target={'_blank'}>
                                        <div className={'card'}>
                                            <img src={laptop} className={'card-img-top p-4'}></img>
                                            <div class={'card-img-overlay text-small-card'}>Personal Website</div>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className={'col-12 col-sm-8 col-md-6 mt-4'}>
                                <a href={'https://github.com/rotunomp/Bikewise'} target={'_blank'}>
                                <div className={'card'}>
                                    <img src={bicycle} className={'card-img-top p-4'}></img>
                                    <div class={'card-img-overlay h2'}>Bikewise</div>
                                </div>
                                </a>
                            </div>

                            {/* 5 */}
                            <div className={'col-12 col-sm-12 col-md-6 mt-4'}>
                            <a href={'https://github.com/rotunomp/applicanttracking'} target={'_blank'}>
                                <div className={'card'}>
                                        <img src={papers} className={'card-img-top p-4'}></img>
                                        <div class={'card-img-overlay h2'}>Applicant Tracking</div>
                                </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className={'col-1 col-lg-2'}></div>
                </div>
            </div>

        );
    }

}

export default Projects;
