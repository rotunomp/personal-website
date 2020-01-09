import React from 'react';
import { Carousel } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

import Glacier from '../resources/Glacier.jpg'
import Grand from '../resources/Grand.jpg'
import Korea from '../resources/Korea.jpg'
import Petrified from '../resources/Petrified.png'
import Sands from '../resources/Sands.jpg'
import Cloud from '../resources/Wordcloud.png'
import githubLogo from "../resources/GitHub-Mark-32px.png"
import emailIcon from "../resources/email-icon.png"
import resumeIcon from "../resources/document-32.png"


import "animate.css/animate.min.css";


class About extends React.Component {

    constructor() {
        super();

        // Get the height of the screen so we can have screen-height elements!
        const viewportHeight = window.innerHeight;
        this.state = { screenHeight: viewportHeight };

        // Set the variables which handle animations

    }

    render() {
        return (
            <div className="About p-0 m-0">

                <div
                    className={'row cloud-block text-center d-flex flex-wrap align-content-center justify-content-center'}
                    style={{
                        backgroundImage: `url(${Cloud})`,
                        backgroundColor: `#533745`,
                        backgroundSize: `cover`,
                        height: this.state.screenHeight,
                        backgroundBlendMode: 'luminosity'
                    }}
                >
                    <section id={'cloud'}></section>

                    <div className={'col-xs-1 col-lg-2'}></div>
                    <div className={'col-xs-10 col-lg-8'}>
                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            className={'cloud-text float-left'}
                            duration={1.5}
                            delay={1000}
                            animateOnce={true}
                            offset={-1500}
                        >
                            Learn a few
                        </ScrollAnimation>

                        <div className={'row divider'}></div>

                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            className={'cloud-text float-right'}
                            duration={1.5}
                            delay={2000}
                            animateOnce={true}
                            offset={-1500}
                        >
                            things about me
                        </ScrollAnimation>


                    </div>
                    <div className={'col-xs-1 col-lg-2'}></div>

                    <div className={'col-xs-12 align-self-end mt-4'}>
                        <ScrollAnimation
                            animateIn={'fadeIn'}
                            duration={1.5}
                            delay={3000}
                            animateOnce={true}
                            offset={-1500}
                        >
                            <AnchorLink className={'btn btn-secondary btn-lg my-4'} role={'button'} href={'#carousel'}>Let's go!</AnchorLink>
                        </ScrollAnimation>
                    </div>

                </div>

                <section id={'carousel'}></section>
                <div className={'row divider'}></div>
                <div className={'row'}>
                    <div className={'col'}></div>
                    <div className={'col-xs-12 col-lg-9'} id={'image-carousel'}>
                        <Carousel
                            fade={'true'}
                            style={{
                                borderStyle: 'groove',
                                border: '10px solid',
                                borderColor: '#533745'
                            }}
                        >
                            <Carousel.Item>
                                <img
                                    className='d-block w-100'
                                    src={Grand}
                                    alt={''}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className='d-block w-100'
                                    src={Glacier}
                                    alt={''}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className='d-block w-100'
                                    src={Korea}
                                    alt={''}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className='d-block w-100'
                                    src={Sands}
                                    alt={''}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className='d-block w-100'
                                    src={Petrified}
                                    alt={''}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={'col'}></div>
                </div>


                <div className={'row divider'}></div>

                <div className={'row'} id={'personal-info'}>
                    <div className={'col-xs-1 col-lg-2'}></div>

                    <div className={'col-xs-10 col-lg-4 mx-4'}>
                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            duration={1}
                            delay={0}
                            animateOnce={true}
                            offset={100}
                        >
                            <div className={'h1'}>
                                Age
                            </div>
                            <hr></hr>
                            <div className={'h3'}>22</div>
                        </ScrollAnimation>
                    </div>
                    <div className={'divider'}></div>
                    <div className={'col-xs-10 col-lg-4 mx-4'}>
                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            duration={1}
                            delay={0}
                            animateOnce={true}
                            offset={100}
                        >
                            <div className={'h1'}>
                                Height
                            </div>
                            <hr></hr>
                            <div className={'h3'}>6'1"</div>
                        </ScrollAnimation>
                    </div>
                    <div className={'divider'}></div>
                    <div className={'col-xs-1 col-lg-2'}></div>
                </div>

                <div className={'row divider-lg'}></div>

                <div className={'row'} id={'personal-info2'}>
                    <div className={'col-xs-1 col-lg-2'}></div>
                    <div className={'col-xs-10 col-lg-4 mx-4'}>
                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            duration={1}
                            delay={0}
                            animateOnce={true}
                            offset={100}
                        >
                            <div className={'h1'}>
                                Favorite Color
                            </div>
                            <hr></hr>
                            <div className={'h3'}>Purple</div>
                        </ScrollAnimation>
                    </div>
                    <div className={'divider'}></div>

                    <div className={'col-xs-10 col-lg-4 mx-4'}>
                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            duration={1}
                            delay={0}
                            animateOnce={true}
                            offset={100}
                        >
                            <div className={'h1'}>
                                Favorite Dish
                            </div>
                            <hr></hr>
                            <div className={'h3'}>Gnocchi</div>
                        </ScrollAnimation>
                    </div>
                    <div className={'divider'}></div>
                    <div className={'col-xs-1 col-lg-2'}></div>
                </div>


                <div className={'divider'}></div>
                <hr></hr>
                <footer className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <a href="https://github.com/rotunomp" className="mx-1">
                            <img src={githubLogo}></img>
                        </a>
                        <a href="mailto:michaelprotuno@gmail.com" className="mx-1">
                            <img src={emailIcon} width="32" height="36"></img>
                        </a>
                        <a href="https://docs.google.com/document/d/1g6f8RIC1J7QcsU68JoeWHc8QJbh1OdT5MbNsuK-Aupo/edit?usp=sharing" className="mx-1">
                            <img src={resumeIcon}></img>
                        </a>
                    </div>
                </footer>

            </div>

        );
    }

}

export default About;
