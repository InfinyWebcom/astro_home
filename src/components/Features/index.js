import React from "react";

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'chat.png'
        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        const { image } = this.state
        return (
            <React.Fragment>
                <div id="features" className={"feature-section ptb-100 " + (this.props.isGray && this.props.isGray === true ? 'gray-light-bg' : '')}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-9">
                                <div className="section-heading text-center mb-5">
                                    <h2>App features</h2>
                                    <p>A holistic approach to all your life problems. Speak to Astrowize’s experts and be absolutely certain about receiving effective solutions</p>

                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-md-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <div className=" icon-size-md mr-4"><img src='assets/img/chatIcon.png' style={{ width: '40px' }} /></div>
                                            <div className="icon-text">
                                                <h5 className="mb-2 cursor-pointer" onClick={() => this.setState({ image: 'chat.png' })}>Chat sessions</h5>
                                                <p>For the ones who are not comfortable talking over the phone, here’s an easy and smooth way to chat with your selected astrologer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <div className=" icon-size-md mr-4"><img src='assets/img/reporticon.png' style={{ width: '40px' }} /></div>
                                            <div className="icon-text">
                                                <h5 className="mb-2 cursor-pointer" onClick={() => this.setState({ image: 'report.png' })}>Detailed reports</h5>
                                                <p>Have weekly or fortnightly detailed reports about your predictions and progress</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <div className=" icon-size-md mr-4"><img src='assets/img/video-call.png' style={{ width: '40px' }} /></div>
                                            <div className="icon-text">
                                                <h5 className="mb-2 cursor-pointer" onClick={() => this.setState({ image: 'video.png' })}>Video call</h5>
                                                <p>For our overseas and domestic audience, this feature allows you to have a face-to-face sessions with our astrology experts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 d-none d-sm-none d-md-block d-lg-block">
                                <div className="position-relative pb-md-5 py-lg-0">
                                    <img alt="placeholder" src={"assets/img/" + image} className="img-center img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <div className=" icon-size-md mr-4"><img src='assets/img/audio-call.png' style={{ width: '40px' }} /></div>
                                            <div className="icon-text">
                                                <h5 className="mb-2 cursor-pointer" onClick={() => this.setState({ image: 'call.png' })}>Audio call</h5>
                                                <p>Have a comprehensive communication with the maestros of astrology and get robust results</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <div className=" icon-size-md mr-4"><img src='assets/img/serviceIcon.png' style={{ width: '40px' }} /></div>
                                            <div className="icon-text">
                                                <h5 className="mb-2 cursor-pointer" onClick={() => this.setState({ image: 'services.png' })}>Services</h5>
                                                <p>Horoscope reading, career counselling, relationship compatibility, tarot reading, vaastu guidance, kundli matching, and gemstones curation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <div className=" icon-size-md mr-4"><img src='assets/img/cartIcon.png' style={{ width: '40px' }} /></div>
                                            <div className="icon-text">
                                                <h5 className="mb-2 cursor-pointer" onClick={() => this.setState({ image: 'cart.png' })}>Gems of Astrowize</h5>
                                                <p>Substantial astrological solutions for your life hurdles</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Feature;
