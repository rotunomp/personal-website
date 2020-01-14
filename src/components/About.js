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
import DownArrow from '../resources/down-arrow.png'

import "animate.css/animate.min.css";


class About extends React.Component {

    constructor() {
        super();

        // Get the height of the screen so we can have screen-height elements!
        const viewportHeight = window.innerHeight;
        this.state = { 
            screenHeight: viewportHeight
         };
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
                    <div className={'col-xs-10 col-lg-8 mx-1 mx-lg-0'}>
                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            className={'cloud-text float-left'}
                            duration={1.5}
                            delay={500}
                            animateOnce={true}
                            offset={0
                            }
                            scrollableParentSelector={'.About'}
                        >
                            Learn a few
                        </ScrollAnimation>

                        <div className={'row divider'}></div>

                        <ScrollAnimation
                            animateIn={'fadeInDown'}
                            className={'cloud-text float-right'}
                            duration={1.5}
                            delay={1000}
                            animateOnce={true}
                            offset={0}
                            scrollableParentSelector={'.About'}
                        >
                            things about me
                        </ScrollAnimation>


                    </div>
                    <div className={'col-xs-1 col-lg-2'}></div>

                    <div className={'col-xs-12 align-self-end mt-4'}>
                        <ScrollAnimation
                            animateIn={'bounce'}
                            duration={1.5}
                            delay={2000}
                            initiallyVisible={true}
                            offset={0}
                            scrollableParentSelector={'.About'}
                        >
                            <AnchorLink className={'my-4'} role={'button'} href={'#carousel'}>
                                <img src={DownArrow} className={'down-arrow'}></img>
                            </AnchorLink>
                        </ScrollAnimation>
                    </div>

                </div>

                <section id={'carousel'}></section>
                <div className={'row divider'}></div>
                <div className={'row divider'}></div>
                <div className={'row'}>
                    <div className={'col-12 col-lg-4 mx-2 mx-lg-0 ml-lg-4 pl-lg-4 h1'}>
                        Bio
                        <hr></hr>
                        <p className={'mr-3'}>
                        Hi, my name is Michael Rotuno. I'm a Software Engineer taking my first steps in the industry. I graduated from Miami University (Ohio) in 2019, and since then I've done projects exploring many routes in the world of programming. These projects include Botify, a service which notifys about music releases, which is by far my favorite thing that I've made. Working on theses projects has solidified what I want in my career: <strong>variety, challenge, and endless learning.</strong>
                        </p>
            
                        <p className={'mr-3'}>
                        Outside of work, I spend time cooking and listening to music. There's nothing more relaxing to me than making something tasty while I listen to my favorite albums. I like to spend time with friends playing video games and going on outdoors adventures. 
                        </p>
                    </div>
                    <div className={'col-12 col-lg-7 ml-lg-4 pl-lg-4'} id={'image-carousel'}>
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
                            offset={200}
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
                            offset={200}
                        >
                            <div className={'h1'}>
                                Favorite Band
                            </div>
                            <hr></hr>
                            <div className={'h3'}>The Beatles</div>
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
                            offset={200}
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
                            offset={200}
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
            </div>

        );
    }

}

export default About;
