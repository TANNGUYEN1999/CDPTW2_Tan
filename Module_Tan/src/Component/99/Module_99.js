import React, { Component } from 'react';
import './sass/Module_99.scss';
import images from './images/post-11.jpg';
class Module_99 extends Component {
    render() {
        return (
            <div className="type-99">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form>
                                <input className="form-text" type="text" name="name" placeholder="Your name*" /><br />
                                <input className="form-text" type="text" name="name" placeholder="Your email address*" /><br />
                                <input className="form-text" type="text" name="name" placeholder="Subject*" /><br />
                                <textarea className="form-text a1" name id cols={30} rows={10} placeholder="Message*" defaultValue={""} /><br />
                                <div className="btn">
                                    <input className="btn-submit" type="submit" Value="Send message" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <h2 className="tittle">Recent Posts</h2>
                            <div className="view-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="/#"><img className="img-fluid" src={images} /> </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="post-content">
                                            <a className="post-tittle" href="/#">Server-Side Rendering</a>
                                            <a className="post-des" href="/#">Sport</a>
                                            <span className="post-date">21 Dec 16 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="view-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="/#"><img className="img-fluid" src={images} /> </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="post-content">
                                            <a className="post-tittle" href="/#">Server-Side Rendering</a>
                                            <a className="post-des" href="/#">Sport</a>
                                            <span className="post-date">21 Dec 16 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="view-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="/#"><img className="img-fluid" src={images} /> </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="post-content">
                                            <a className="post-tittle" href="/#">Server-Side Rendering</a>
                                            <a className="post-des" href="/#">Sport</a>
                                            <span className="post-date">21 Dec 16 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="view-content">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="/#"><img className="img-fluid" src={images} /> </a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="post-content">
                                            <a className="post-tittle" href="/#">Server-Side Rendering</a>
                                            <a className="post-des" href="/#">Sport</a>
                                            <span className="post-date">21 Dec 16 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Module_99;