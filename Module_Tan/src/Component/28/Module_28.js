import React, { Component } from 'react';
import './sass/Module_28.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from './images/avatar-4.jpg';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class Module_28 extends Component {
    render() {
        return (
            <div className="type-28">
                <div className="container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="swiperjs">

                        <SwiperSlide className="slide">
                            <div className="text-content">
                                <div className="img-ava">
                                    <img className="img-fluid" src={images} />
                                </div>
                                <div className="text-desc">
                                    Mion has impacted the way our business operates, so much so that it now contributes to our strategy going forward as it relates to growth, expansion, and new opportunities for our clients and our employees.
                                </div>
                                <div className="name" >David Rae</div>
                                <div className="job">CEO</div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <div className="text-content">
                                <div className="img-ava">
                                    <img className="img-fluid" src={images} />
                                </div>
                                <div className="text-desc">
                                    Mion has impacted the way our business operates, so much so that it now contributes to our strategy going forward as it relates to growth, expansion, and new opportunities for our clients and our employees.
                                </div>
                                <div className="name" >David Rae</div>
                                <div className="job">CEO</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <div className="text-content">
                                <div className="img-ava">
                                    <img className="img-fluid" src={images} />
                                </div>
                                <div className="text-desc">
                                    Mion has impacted the way our business operates, so much so that it now contributes to our strategy going forward as it relates to growth, expansion, and new opportunities for our clients and our employees.
                                </div>
                                <div className="name" >David Rae</div>
                                <div className="job">CEO</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <div className="text-content">
                                <div className="img-ava">
                                    <img className="img-fluid" src={images} />
                                </div>
                                <div className="text-desc">
                                    Mion has impacted the way our business operates, so much so that it now contributes to our strategy going forward as it relates to growth, expansion, and new opportunities for our clients and our employees.
                                </div>
                                <div className="name" >David Rae</div>
                                <div className="job">CEO</div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        );
    }
}


export default Module_28;