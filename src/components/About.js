import React from 'react';
import { Carousel } from 'react-bootstrap';

import Glacier from '../resources/Glacier.jpg'
import Grand from '../resources/Grand.jpg'
import Korea from '../resources/Korea.jpg'
import Petrified from '../resources/Petrified.png'
import Sands from '../resources/Sands.jpg'


class About extends React.Component {

    render() {
        return (
            <div className="About pt-3">
                <div className={'row'}>
                    <div className={'col'}></div>
                    <div className={'col-xs-12 col-lg-11'} id={'image-carousel'}>
                        <Carousel fade={'true'}>
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
