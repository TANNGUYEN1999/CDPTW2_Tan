import React, { Component } from 'react';
import './sass/Module_44.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

class Module_44 extends Component {
    render() {
        return (
            <div className="type-44">
                <div className="container">
                    <div className="tittle">
                    <FontAwesomeIcon icon={faTag} /> Tags
                        </div>
                    <div className="box">
                        <div className="box-content">
                            <div className="item">
                                <a className="item-text" href="/#">Shopping</a>
                            </div>
                            <div className="item">
                                <a className="item-text" href="/#">Coupons</a>
                            </div>
                            <div className="item">
                                <a className="item-text" href="/#">Directory</a>
                            </div>
                            <div className="item">
                                <a className="item-text" href="/#">Wheelchair Accesible</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Module_44;