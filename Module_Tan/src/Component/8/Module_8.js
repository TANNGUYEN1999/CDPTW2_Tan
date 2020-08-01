import React, { Component } from 'react';
import './sass/Module_8.scss';
import images from './images/france.jpg';

class Module_8 extends Component {
    render() {
        return (
            <div className="type-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-row-a1">
                            <div className="post-image">
                                <a href="/#">
                                    <img className="img-fluid" src={images} alt="123" />
                                </a><br />
                            </div>

                            <div className="text-content">
                                <h3 className="text-tittle">
                                    <a href="/#">France</a>
                                </h3>
                                <div className="text-desc">Enjoy the best places in…</div>
                            </div>

                        </div>
                        <div className="col-md-6 my-row-a2">
                            <div className="content">
                                <div className="row my-row ">
                                    <div className="col-md-6 my-icon">
                                        <div className="post-image">
                                            <a href="/#">
                                                <img className="img-fluid" src={images} alt="123" />
                                            </a>
                                        </div>

                                        <div className="text-content">
                                            <h3 className="text-tittle">
                                                <a href="/#">France</a>
                                            </h3>
                                            <div className="text-desc">Enjoy the best places in…</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-icon">
                                        <div className="post-image">
                                            <a href="/#">
                                                <img className="img-fluid" src={images} alt="123" />
                                            </a>
                                        </div>

                                        <div className="text-content">
                                            <h3 className="text-tittle">
                                                <a href="/#">France</a>
                                            </h3>
                                            <div className="text-desc">Enjoy the best places in…</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-icon">
                                        <div className="post-image">
                                            <a href="/#">
                                                <img className="img-fluid" src={images} alt="123" />
                                            </a>
                                        </div>

                                        <div className="text-content">
                                            <h3 className="text-tittle">
                                                <a href="/#">France</a>
                                            </h3>
                                            <div className="text-desc">Enjoy the best places in…</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-icon">
                                        <div className="post-image">
                                            <a href="/#">
                                                <img className="img-fluid" src={images} alt="123" />
                                            </a>
                                        </div>

                                        <div className="text-content">
                                            <h3 className="text-tittle">
                                                <a href="/#">France</a>
                                            </h3>
                                            <div className="text-desc">Enjoy the best places in…</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-md-6">
                                        <div className="post-image">
                                            <a href="/#">
                                                <img className="img-fluid" src={images} alt="123" />
                                            </a>
                                        </div>

                                        <div className="text-content">
                                            <h3 className="text-tittle">
                                                <a href="/#">France</a>
                                            </h3>
                                            <div className="text-desc">Enjoy the best places in…</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-image">
                                            <a href="/#">
                                                <img className="img-fluid" src={images} alt="123" />
                                            </a><br />
                                        </div>

                                        <div className="text-content">
                                            <h3 className="text-tittle">
                                                <a href="/#">France</a>
                                            </h3>
                                            <div className="text-desc">Enjoy the best places in…</div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Module_8;