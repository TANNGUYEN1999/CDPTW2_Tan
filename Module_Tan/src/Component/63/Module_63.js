import React, { Component } from 'react';
import './sass/Module_63.scss';
import images from './images/cta-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Module_63 extends Component {
    render() {
        return (
            <div className="type-63">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={images} />
                        </div>
                        <div className="col-md-6">
                            <div className="content">
                                <h2 className="tittle">Creative Concept Layouts</h2>
                                <div className="text-body">
                                    Lorem ipsum dolor amet, consectetur adipisicing, sed eiusmod tempor incididunt labore dolore magna aliqua consectetur adipisicing.
                                </div>
                                <a className="btn-acction1" href="/#">Read more   <FontAwesomeIcon icon={faArrowRight} /></a>
                                <a className="btn-acction2" href="/#">Read more   <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Module_63;