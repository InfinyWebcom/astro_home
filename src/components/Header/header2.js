import React from "react";
import { connect } from "react-redux";
import './index.css'
class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <nav className={`navbar navbar-expand-lg fixed-top   ${this.props.horoscope ? this.props.horoscope : 'bg-transparent'}`}>
                        <div className="container">
                            <a className={`navbar-brand ${this.props.horoscope ? 'displayLogo' : ''}`} href="/">
                                <img src={this.props.isColorLogo && this.props.isColorLogo === true ? "assets/img/logo (1).png" : "assets/img/logo (1).png"}
                                    alt="logo" className="img-fluid" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="ti-menu"></span>
                            </button>

                            <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto menu">
                                    <li><a href="/#" className="page-scroll"> Home</a>

                                    </li>
                                    <li><a href="/#about" className="page-scroll">About Us</a></li>
                                    <li><a href="/#masterminds" className="page-scroll">Astrologers</a></li>
                                    <li><a href="/#faq" className="page-scroll">FAQs</a>

                                    </li>
                                    <li>< a href="/#contact" className="page-scroll">Contact Us</a></li>
                                    <li><a target='_blank' href="/become_an_astrologer" className="page-scroll">Join the panel</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

export default connect(state => ({}))(Header);
