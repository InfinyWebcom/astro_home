import React from "react";
import { connect } from "react-redux";
import { subscribe } from "../../actions/index";
import { NotificationManager } from 'react-notifications';
import Axios from 'constants/axiosRequest'
import { required, emailField } from 'constants/validations';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormValueChange(inputName, event) {
        let stateValue = {};
        stateValue[inputName] =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        this.setState(stateValue);
    }

    async handleSubmit(event) {
        event.preventDefault();
        // get action
        const { email } = this.state
        if (!required(email) && !emailField(email)) {
            let data = await Axios.axiosHelperFunc('post', 'admin/subscribeNewsLetter', { email: this.state.email })
            if (data.data && data.data.error == false) {
                NotificationManager.success(data.data.title)
                this.setState({ email: '' })
            } else {
                NotificationManager.error(data.data.title)
            }
        } else if (required(email)) {
            NotificationManager.error('Email is required')
        } else {
            NotificationManager.error('Please enter correct email.')
        }

    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        return (
            <React.Fragment>
                <footer className={"footer-1 gradient-bg ptb-60 " + (this.props.withoutNewsletter && this.props.withoutNewsletter === true ? "" : "footer-with-newsletter")}>
                    {!(this.props.withoutNewsletter && this.props.withoutNewsletter === true) && (
                        <div className="container">
                            <div className="row newsletter-wrap secondary-bg rounded shadow-lg p-5">
                                <div className="col-md-6 col-lg-7 mb-4 mb-md-0 mb-sm-4 mb-lg-0">
                                    <div className="newsletter-content text-white">
                                        <h3 className="mb-0 text-white">Subscribe to our blog</h3>
                                        <p className="mb-0">Get instant updates about our encyclopedic astrology blogs.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <form className="newsletter-form position-relative " method="post" onSubmit={this.handleSubmit}>
                                        <input value={this.state.email} onChange={e => this.handleFormValueChange("email", e)} type="text" className="input-newsletter form-control" placeholder="Enter your email" name="email" required="" />
                                        <button type="submit" className="disabled primary-bg"><i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-3 mb-4 mb-md-4 mb-sm-4 mb-lg-0 pl-0">
                                <a href="/#" className="navbar-brand2 mb-2">
                                    <img src="assets/img/logo (1).png" alt="logo" className="img-fluid imageAnimFooter" />
                                </a>
                                <br />


                            </div>
                            <div className="col-md-12 col-lg-3 mb-4 mb-md-4 mb-sm-4 mb-lg-0">

                                <h6 className="text-uppercase">Social Links</h6>
                                <div className="list-inline social-list-default background-color social-hover-2 mt-2">
                                    <li className="list-inline-item"><a className="facebook" href="https://www.facebook.com/astrowize/"><i className="fab fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="linkedin" href="https://www.linkedin.com/company/astrowize-live/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a className="instagram" href="https://www.instagram.com/astrowize.live/"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a className="twitter" href="https://www.twitter.com/astrowize/"><i className="fab fa-twitter"></i></a></li>
                                </div>

                            </div>
                            <div className="col-md-12 col-lg-3 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                                <h6 className="text-uppercase">Company Details</h6>
                                <div className=" background-color social-hover-2 mt-2">
                                    <ul>
                                        <li>
                                            <a href="/privacy_policy">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="/tnc">Terms and Conditions</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-3 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                                <h6 className="text-uppercase">Links</h6>
                                <div className=" background-color social-hover-2 mt-2">
                                    <ul>
                                        <li>
                                            <a className='page-scroll' href="/#">Home</a>
                                        </li>
                                        <li>
                                            <a className='page-scroll' href="#about">About us</a>
                                        </li>
                                        <li>
                                            <a className='page-scroll' href="#masterminds">Astrologers</a>
                                        </li>
                                        <li>
                                            <a className='page-scroll' href="#faq">FAQs</a>
                                        </li>
                                        <li>
                                            <a className='page-scroll' href="#contact">Contact Us</a>
                                        </li>
                                        <li><a target='_blank' href="/become_an_astrologer" >Join the panel</a></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
                <div className="footer-bottom py-3 gray-light-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-7">
                                <div className="copyright-wrap small-text">
                                    <p className="mb-0">&copy; AstroWize, All rights reserved</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a className="small-text" href="https://www.infinyweb.com/" target='_blank'>Powered By Infiny Webcom Pvt Ltd.</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    state
}))(Footer);
