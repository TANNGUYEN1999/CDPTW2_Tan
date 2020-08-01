import React, { Component } from 'react';
import images from './images/post-12.jpg';
import './sass/Module_87.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Module_87 extends Component {
    render() {
        return (
            <div className="type-87">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a href="/#"> <h4 className="tittle"> Professional Staff </h4></a>
                            <div className="post-image">
                                <a href="/#">
                                    <img className="img-fluid" src={images} alt="123" />
                                </a><br />
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
                            <a href="/#"> <h4 className="tittle"> Professional Staff </h4></a>
                            <div className="post-image">
                                <a href="/#">
                                    <img className="img-fluid" src={images} alt="123" />
                                </a><br />
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
                            <a href="/#"> <h4 className="tittle"> Professional Staff </h4></a>
                            <div className="post-image">
                                <a href="/#">
                                    <img className="img-fluid" src={images} alt="123" />
                                </a><br />
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
                            <a href="/#"> <h4 className="tittle"> Professional Staff </h4></a>
                            <div className="post-image">
                                <a href="/#">
                                    <img className="img-fluid" src={images} alt="123" />
                                </a><br />
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
export default Module_87;