import React, { Component } from "react";
import _data from "../../data";
import { Player } from 'video-react';
import ReadMoreLess from 'components/TextTruncate'

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonial: {}
        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
        this.setState({
            testimonial: _data.testimonial
        });
    }

    render() {
        return (
            <React.Fragment>
                <section id='client_says' className="position-relative gradient-bg ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-5 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                <div className="testimonial-heading text-white">
                                    <h2 className="text-white">Testimonials</h2>
                                    <p>When something is so personalised for you, you feel special. See what our clients have to say about us</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="testimonial-content-wrap">
                                    <img src="assets/img/testimonial-arrow-top.png" className="img-fluid testimonial-tb-shape shape-top" alt="testimonial shape" />
                                    <div className="owl-carousel owl-theme client-testimonial-1 dot-indicator testimonial-shape">
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/user.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Dr. Neha Shah</h5>
                                                        <span>Medical researcher</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    Astrowize is intuitive and thoroughly professional. Strongly recommend

                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://www.linkedin.com/in/neha-shah-ph-d-703937160" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-linkedin"></i> </a>
                                                </div>
                                                    <div className="col-6 action-btns mt-3 d-flex justify-content-end">

                                                        <a href="assets/img/video/1.mp4" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/neetha.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Ms. Neetha Shetty</h5>
                                                        <span>Actor</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    Astrowize provides easy and practical solutions
                                                </div>
                                                <div className='row'><div className="col-4 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://instagram.com/neethashetty_official?igshid=2ydmbsivsxqm" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fab fa-instagram"></i> </a>
                                                    <a href="https://www.neethashetty.com" target='_blank' className=" btn btn-white btn-circle btn-icon ml-2"><i className="fas fa-globe"></i> </a>
                                                </div>
                                                    <div className="col-4 action-btns mt-3 d-flex justify-content-start">


                                                    </div>
                                                    <div className="col-4 action-btns mt-3 d-flex justify-content-end">

                                                        <a href="assets/img/video/2.mp4" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/sonal.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Ms. Sonal Parihar</h5>
                                                        <span>Actor, Model</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    Astrowize is direct and honest. The astrologers are like counsellors
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://instagram.com/sonalparihar?igshid=1cgmsher11ken" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-instagram"></i> </a>
                                                </div>
                                                    <div className="col-6 action-btns mt-3 d-flex justify-content-end">

                                                        <a href="assets/img/video/3.mp4" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/ssmilly.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30"> Ms. SSmilly Suri</h5>
                                                        <span>Actor, Dancer and Performer</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    Astrowize not only provides predictions but also motivation
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://instagram.com/smiliesuriofficial?igshid=l8jjhsv2m3b9" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-instagram"></i> </a>
                                                </div>
                                                    <div className="col-6 action-btns mt-3 d-flex justify-content-end">

                                                        <a href="assets/img/video/4.mp4" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/jia.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Ms. Jia Chauhan and Mr. Paras Sharma</h5>
                                                        <span> Actor</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    The Astrowize team is knowledgeable and very helpful
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://instagram.com/jiyachauhan22_official?igshid=ue13mvs0hzsx" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-instagram"></i> </a>
                                                </div>
                                                    <div className="col-6 action-btns mt-3 d-flex justify-content-end">

                                                        <a href="assets/img/video/5.mp4" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/amit.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Amit Dolawat</h5>
                                                        <span>Actor</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    Astrowize is the one-stop solution app providing solutions in a logical and scientific manner
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://instagram.com/amitdolawat?igshid=ttzu61di9bud" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-instagram"></i> </a>
                                                </div>
                                                    <div className="col-6 action-btns mt-3 d-flex justify-content-end">

                                                        <a href="assets/img/video/6.mp4" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/kunal.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Mr. Kunal Girdhar</h5>
                                                        <span>Chartered accountant</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    Astrowize predicts scientifically and its predictions are spot on
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://www.linkedin.com/in/kunal-girdhar-198921112" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-linkedin"></i> </a>
                                                </div>
                                                    <div className="col-6 action-btns mt-3 d-flex justify-content-end">

                                                        <a href="assets/img/video/7.mp4" className="popup-youtube btn btn-white btn-circle btn-icon"><i className="fas fa-play"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/Yogesh_Kumar_Sharma.jpeg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Mr. Yogesh Kumar  Sharma </h5>
                                                        <span>United Nations (UN), IT Administrator , Uganda</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    <ReadMoreLess charLimit={180}>
                                                        Acharya Gokul ji is a vibrant personality with a very positive attitude towards life.
                                                        His astrological predictions are very useful to take right decisions for future and his suggested Upaye (tips) are simple to follow yet they are very effective.
                                                        He possesses very good knowledge about Vaastu as well. His suggestions worked very nicely for me and brought lot of positive changes in me and my family members life.
                                                        I wish him luck and success in his life.....
                                                    </ReadMoreLess>
                                                    {/* <p>Enthusiastically innovate B2C data without clicks-and-mortar convergence. Monotonectally deliver compelling testing procedures vis-a-vis B2B testing procedures. Competently evisculate integrated resources whereas global.</p> */}
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://www.linkedin.com/in/sharmayogeshk" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-linkedin"></i> </a>
                                                </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/Jitin_Bajaj.jpeg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Mr. Jitin Bajaj</h5>
                                                        <span>Director Strategic Alliances at Mreck</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    <ReadMoreLess charLimit={180}>
                                                        I was referred to Gokul Ji by a friend who benefitted a lot from Gokul Ji’s astrological guidance.  In the past, I have consulted several well known astrologers in the US but Gokul Ji’s predictions have been the most accurate for me so far. Gokul Ji has a deep knowledge of astrology that he combines with his ability to understand people’s unique life situations which allows him to make relevant and accurate predictions. I wish him luck in his future endevours and hope that others are also able to benefit from his knowledge of astrology.
                                                    </ReadMoreLess>
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://www.linkedin.com/in/jitin-bajaj-9a887513" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-linkedin"></i> </a>
                                                </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/rajiv.jpg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Dato' Rajiv Ahuja</h5>
                                                        <span>Director of Foreign Investments</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    <ReadMoreLess charLimit={180}>
                                                        To say that Gokul Ji has influenced my life with his profound knowledge of Astrology would be the biggest understatement of my life. In the past 10 years, Gokul Ji has guided me not just as an Astrologer but also as a mentor, a guide and a philosopher with his unique and calm way of explaining things.

                                                        From my first meeting in Mumbai 10 years ago, I consult him till today even after I have settled in Malaysia and now work for the Malaysian Government's Economic Development Council as a Director of Foreign Investments.

                                                        Gokul Ji's predictions have been spot on for me and he has been my spiritual backbone more than once when I was facing the weakest phases of my life. He has been a great friend, counselor and an elder brother to me and I wish him all the best in this great endeavor that he has started to reach more people through this wonderful app. I am absolutely confident that under the vast experience and guiding hand of Gokul Ji, Astrowize will also meet the greatest of success.
                                                    </ReadMoreLess>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/Dr_Neha_Goyal.jpeg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Dr.Neha Goyal</h5>
                                                        <span>Doctor</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    <ReadMoreLess charLimit={180}>
                                                        Gokul ji is a very straightforward person. I am consulting him for past 13 years now and that too accidently as i don't believe much in astrology. But when i met him for the first time, he was absolutely unlike other astrologers. He is a very sensible person by nature, his solutions are always simple yet effective. His predictions are reliable. His prime moto is to satisfy his clients and give them genuine advice as per their chart. I would always prefer him only for astrology and no one else.

                                                        I wish him goodluck and success in life.
                                                    </ReadMoreLess>
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://www.linkedin.com/in/dr-neha-goyal-3135456b" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-linkedin"></i> </a>
                                                </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonial-quote-wrap">
                                                <div className="media author-info mb-3">
                                                    <div className="author-img mr-3">
                                                        <img src="assets/img/Sachin_Agarwal.jpeg" alt="client" className="img-fluid" />
                                                    </div>
                                                    <div className="media-body text-white">
                                                        <h5 className="mb-0 text-white text-wrap maxWidth-30">Capt Sachin Agarwal</h5>
                                                        <span>Captain, Ghana</span>
                                                    </div>
                                                    <i className="fas fa-quote-right text-white"></i>
                                                </div>
                                                <div className="client-say text-white">
                                                    <ReadMoreLess charLimit={180}>
                                                        Connecting with Gokul ji has been a wonderful experience. He has an immense and deep knowledge of astrology that makes situations / events easy to deal with for us as clients. He foresees many of our problems before we tell him, and also  provides us with appropriate guidance and remedies at all time. We wish him all the best and thank him for his moral support and solutions for making our lives easier
                                                    </ReadMoreLess>
                                                </div>
                                                <div className='row'><div className="col-6 action-btns mt-3 d-flex justify-content-start">

                                                    <a href="https://www.linkedin.com/in/sachhin-agarrwal-2312099" target='_blank' className=" btn btn-white btn-circle btn-icon"><i className="fa fa-linkedin"></i> </a>
                                                </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="assets/img/testimonial-arrow-bottom.png" className="img-fluid testimonial-tb-shape shape-bottom" alt="testimonial shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Testimonial;
