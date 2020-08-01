import React, { Component } from 'react';
import './sass/Module_85.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import images from './images/brand-dark-3.png'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class Module_85 extends Component {
    render() {
        return (
            <div className="type-85">
                <div className="container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="swiperjs">

                        <SwiperSlide className="slide">

                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />
                           
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />

                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <img className="img-fluid" src={images} />
                        </SwiperSlide>


                    </Swiper>

                </div>
            </div>

        );
    }
}

export default Module_85;