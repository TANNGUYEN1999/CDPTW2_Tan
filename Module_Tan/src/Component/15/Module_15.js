import React, { Component } from 'react';
import './sass/Module_15.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import imgaes from './images/logo.png';
import { Container } from 'react-bootstrap';

class Module_15 extends Component {
    render() {
        return (
            <div className="type-15">
                <div className="menu-15">
                    <nav className="navbar navbar-expand-sm navbar-light bg-lightsecond">
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <a className="navbar-brand" href="#"><img src={imgaes} className="img-fluid img-logo" alt="logo" /></a>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div className="dropdown">
                                    <a className="navbar-brand btn-home" href="#">Home   <FontAwesomeIcon icon={faChevronDown} /></a>
                                    <div className="dropdown-menu" >
                                        <a className="dropdown-item item-menu" href="#">Home-Map</a>
                                        <a className="dropdown-item item-menu" href="#">Home-Videos</a>
                                        <a className="dropdown-item item-menu-end" href="#">Home-Slider</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="navbar-brand btn-imenu" href="#">Listings  <FontAwesomeIcon icon={faChevronDown} /></a>
                                    <div className="dropdown-menu drop-up" >
                                        <a className="dropdown-item item-menu" href="#">Home-Map</a>
                                        <a className="dropdown-item item-menu" href="#">Home-Videos</a>
                                        <a className="dropdown-item item-menu-end" href="#">Home-Slider</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="navbar-brand btn-imenu" href="#">Blog <FontAwesomeIcon icon={faChevronDown} /></a>
                                    <div className="dropdown-menu" >
                                        <a className="dropdown-item item-menu" href="#">Home-Map</a>
                                        <a className="dropdown-item item-menu" href="#">Home-Videos</a>
                                        <a className="dropdown-item item-menu-end" href="#">Home-Slider</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="navbar-brand btn-imenu" href="#">Pages <FontAwesomeIcon icon={faChevronDown} /></a>
                                    <div className="dropdown-menu" >
                                        <a className="dropdown-item item-menu" href="#">Home-Map</a>
                                        <a className="dropdown-item item-menu" href="#">Home-Videos</a>
                                        <a className="dropdown-item item-menu-end" href="#">Home-Slider</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="navbar-brand btn-imenu" href="#">Features <FontAwesomeIcon icon={faChevronDown} /></a>
                                    <div className="dropdown-menu" >
                                        <a className="dropdown-item item-menu" href="#">Home-Map</a>
                                        <a className="dropdown-item item-menu" href="#">Home-Videos</a>
                                        <a className="dropdown-item item-menu-end" href="#">Home-Slider</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="navbar-brand btn-imenu" href="#">Contact </a>
                                </div>
                                <a className="navbar-brand btn-addlist" href="#">+ Add Listing</a>
                                <a className="navbar-brand icon-user" href="#"> <FontAwesomeIcon icon={faUser} /></a>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Module_15;