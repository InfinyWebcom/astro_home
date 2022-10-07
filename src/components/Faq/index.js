import React from "react";

class Faq extends React.Component {
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
                <section id="faq" className={"ptb-100 gray-light-bg"}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Frequently Asked Queries</h2>
                                    <p>Have questions about how our app works? Check out these frequently asked questions and the answers to them</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                                <div className="img-wrap">
                                    <img src="assets/img/FAQ2.png" alt="download" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div id="accordion" className="accordion faq-wrap">
                                    <div className="card mb-3">
                                        <a className="card-header " data-toggle="collapse" href="#collapse0" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">How can I connect with my personal astrologer?</h6>
                                        </a>
                                        <div id="collapse0" className="collapse show" data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>You can get in touch with our astrologers through chat sessions, audio call, or video call. Make sure you have your Astrowize wallet loaded before you make a call. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse1" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">What if I’m not satisfied with the Astro consultancy I got?</h6>
                                        </a>
                                        <div id="collapse1" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>We have a team of experienced experts who will leave no stone unturned to provide best possible resolution and guidance to you. In a rare scenario if you are not satisfied with our efforts, you can get in touch with us through over customer care number and email id (mention the number and email address) and we would love to assist to find the best possible resolution. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">Can I order products recommended by my astrologer outside of the system?</h6>
                                        </a>
                                        <div id="collapse2" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>You are most welcome to buy recommended products from external sources but our products come with Astrowize guarantee and quality assurance. So we would recommend our customers to buy the products from Astrowize store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">How do I make payments to the astrologers?</h6>
                                        </a>
                                        <div id="collapse3" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>You can recharge your Astrowize wallet by using debit/credit card, UPI, Google Pay,Paytm, Net Banking and payment gateways. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse4" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">What kind of puja services can I avail and will I be able to book them at the time and location of my convenience?</h6>
                                        </a>
                                        <div id="collapse4" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>These are some of the major Puja services we provide as of now :<br />

                                                    <b>Grah parvesh puja (ग्रह प्रवेश पूजा) <br />
                                                Rudrabhishek puja (रुद्राभिषेक पूजा)<br />
                                                Mahamrityunjay puja( महामृत्युंजय पूजा)<br />
                                                Navgarah puja( नवग्रह पूजा)<br />
                                                Kal sarp dosh puja( काल सर्प दोष पूजा)<br />
                                                Manglik dosh nivaran puja(मांगलिक दोष निवारण)<br />
                                                Nadi dosh puja (नाड़ी दोष पूजा)<br />
                                                Gand Mul  puja( गण्ड मूल पूजा)<br />
                                                Pitar dosh nivaran puja( पित्र दोष निवारण पूजा)<br /></b>

                                                You have the luxury of booking these services through our app/website at location and time at your convenience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse5" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">How can I register as an astrologer?</h6>
                                        </a>
                                        <div id="collapse5" className="collapse " data-parent="#accordion">
                                            <div className="card-body white-bg">
                                                <p>You can register with us by using the registration link provided on our webpage/app. Once you fill in all the required details, our team will get in touch with you and explain the final onboarding process to you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Faq;
