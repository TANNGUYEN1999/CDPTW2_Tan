import React, { Component } from 'react';
import './sass/Module_70.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

class Module_70 extends Component {
    render() {
        return (
            <div className="type-70">
                <div className="container">
                    <div className="text-content">
                        <h2 className="tittle">We create Experiences With <br />
                        Help From The Best Our Company
                    </h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="content">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFileCode} />
                                    </div>
                                    <div className="tittle-meta">
                                        Web Design & UI
                                </div>
                                    <div className="text-desc">
                                        Donec id elit non mi porta gravida at eget metus lorem ipsum dolor.
                                </div>
                                    <a className="btn-read" href="/#">Read more  <FontAwesomeIcon icon={faArrowRight} /></a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content">
                                    <div className="icon2">
                                        <FontAwesomeIcon className="icon1" icon={faLuggageCart} />
                                    </div>
                                    <div className="tittle-meta">
                                        Web Design & UI
                                </div>
                                    <div className="text-desc">
                                        Donec id elit non mi porta gravida at eget metus lorem ipsum dolor.
                                </div>
                                    <a className="btn-read" href="/#">Read more  <FontAwesomeIcon icon={faArrowRight} /></a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content">
                                    <div className="icon3">
                                        <FontAwesomeIcon className="icon1" icon={faChartArea} />
                                    </div>
                                    <div className="tittle-meta">
                                        Web Design & UI
                                </div>
                                    <div className="text-desc">
                                        Donec id elit non mi porta gravida at eget metus lorem ipsum dolor.
                                </div>
                                    <a className="btn-read" href="/#">Read more  <FontAwesomeIcon icon={faArrowRight} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Module_70;