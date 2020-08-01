import React, { Component } from 'react';
import images from './images/post-12.jpg';
import './sass/Module_88.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Module_88 extends Component {
    render() {
        return (
            <div className="type-88">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="post-img">
                                <a href="/#">
                                    <img className="img-fluid" src={images}></img>
                                </a>
                                <h1 className="tittle1">Professional Staff</h1>
                            </div>
                            <div class="content">
                                <div className="des">
                                    Maecenas tempus, tellus eget condi men tum rhon cus.
                            </div>
                                <a className="btn-readmore" href="/#">Read more
                            <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="post-img">
                                <a href="/#">
                                    <img className="img-fluid" src={images}></img>
                                </a>
                                <h1 className="tittle1">Professional Staff</h1>
                            </div>
                            <div class="content">
                                <div className="des">
                                    Maecenas tempus, tellus eget condi men tum rhon cus.
                            </div>
                                <a className="btn-readmore" href="/#">Read more
                            <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="post-img">
                                <a href="/#">
                                    <img className="img-fluid" src={images}></img>
                                </a>
                                <h1 className="tittle1">Professional Staff</h1>
                            </div>
                            <div class="content">
                                <div className="des">
                                    Maecenas tempus, tellus eget condi men tum rhon cus.
                            </div>
                                <a className="btn-readmore" href="/#">Read more
                            <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="post-img">
                                <a href="/#">
                                    <img className="img-fluid" src={images}></img>
                                </a>
                                <h1 className="tittle1">Professional Staff</h1>
                            </div>
                            <div class="content">
                                <div className="des">
                                    Maecenas tempus, tellus eget condi men tum rhon cus.
                            </div>
                                <a className="btn-readmore" href="/#">Read more
                            <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Module_88;