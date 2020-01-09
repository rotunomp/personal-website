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
                            offset={0}
                        >
                            <AnchorLink className={'btn btn-secondary btn-lg my-4'} role={'button'} href={'#carousel'}>Let's go!</AnchorLink>
                        </ScrollAnimation>
                    </div>

                </div>

                <section id={'carousel'}></section>
                <div className={'row my-4 py-4'}></div>
                <div className={'row mt-4 py-4'}>
                    <div className={'col'}></div>
                    <div className={'col-xs-12 col-lg-9'} id={'image-carousel'}>
                        <Carousel
                            fade={'true'}
                            style={{
                                borderStyle: 'groove',
                                border: '5px solid black',
                                borderColor: 'black'
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

            </div>

        );
    }

}

export default About;
