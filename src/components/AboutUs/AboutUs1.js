import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        return (
            <React.Fragment>
                <div className="overflow-hidden">
                    <section id="about" className="about-us ptb-100 background-shape-img position-relative">
                        <div className="animated-shape-wrap">
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                            <div className="animated-shape-item"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                                <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                    <div className="about-content-left">
                                        <h2>Astrowize Helps to Manage Everything for You</h2>
                                        <p>AstroWize was created because we wanted to go beyond just generic mainstream astrology and add value to our clients by being their personal astrologer in every situation.
                                        </p>
                                        <ul className="dot-circle pt-3">
                                            <li>We provide easy access of our customer-centric ace experts
                                            to anyone across the globe</li>
                                            <li>Our carefully selected panel of astrologers have decades of expertise, helping provide solutions that are customised to each client wherever they may be.<br />

                                            At AstroWize, your personal astrologer is now just a click away. Book a consultancy session with our experts today
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-5 col-lg-4">
                                    <div className="about-content-right">
                                        <img src="assets/img/foryou.png" alt="about us" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
