import React, { Component } from 'react';
import './sass/Module_10.scss';
import images from './images/image-2_0.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

class Module_10 extends Component {
    render() {
        return (
            <div className="type-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="view-content">
                                <div className="tittle">
                                    Find Locations
                                </div>
                                <div className="tittle-des">
                                    90,100 Marker In 120+ Countries.
                                </div>
                                <div className="tittle-meta">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                 </div>
                            </div>
                            <div className="view-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="icon1">
                                                    <FontAwesomeIcon icon={faChartLine} />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="content-tittle">
                                                    100 New Daily Accounts
                                                </div>
                                                <div className="content-desc">
                                                    Aenean lacinia bibendum nulla sed consectetur
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-4">
                                            <div className="icon2">
                                                    <FontAwesomeIcon icon={faMedal} />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="content-tittle">
                                                    100 New Daily Accounts
                                                </div>
                                                <div className="content-desc">
                                                    Aenean lacinia bibendum nulla sed consectetur
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="view-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-4">
                                            <div className="icon3">
                                                    <FontAwesomeIcon icon={faFileCode} />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="content-tittle">
                                                    100 New Daily Accounts
                                                </div>
                                                <div className="content-desc">
                                                    Aenean lacinia bibendum nulla sed consectetur
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-4">
                                            <div className="icon4">
                                                    <FontAwesomeIcon icon={faChartArea} />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="content-tittle">
                                                    100 New Daily Accounts
                                                </div>
                                                <div className="content-desc">
                                                    Aenean lacinia bibendum nulla sed consectetur
                                             </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={images} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Module_10;