import React from "react";
import Slider from "react-slick";
import Avatar from 'components/Avtar'
import ReadMore from 'components/TextTruncate'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}
class TeamMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamMember: {}
        };
    }

    componentDidMount() {
        /**
         * Your ajax will goes here to get data then call setState
         */
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            arrows: false,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 724,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <React.Fragment>
                <section id='masterminds' className={"team-two-section ptb-100 "}>
                    <div className="container">
                        {!(this.props.hideTitle && this.props.hideTitle === true) && (
                            <div className="row justify-content-center">
                                <div className="col-md-9 col-lg-8">
                                    <div className="section-heading text-center">
                                        <h2>Masterminds of Astrowize</h2>
                                        <p>Meet our astrology maestros.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!(this.props.item && this.props.item > 3) && (

                            <Slider {...settings}>

                                <div>
                                    <div className="col-md-10 col-lg-12 ">
                                        <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                            <Avatar alt="Remy Sharp" image="assets/img/members/AcharyaGokul.jpeg" className="img-fluid m-auto" />

                                            {/* <Avatar image="assets/img/members/1.jpg" alt="team" width="120" className="img-fluid m-auto" /> */}
                                            <div className="team-content mt-2">
                                                <h6 className="mb-0">Acharya Gokul</h6>
                                                <span className='font-size-75'><span className='font-weight-bold'>Experience:</span> 20 years</span>
                                                <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3 d-inline">
                                                    {" Vedic Astrology, KP. Prashana Kundli"}</ReadMore></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-10 col-lg-12 ">
                                        <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                            <Avatar image="assets/img/members/nehap.jpg" alt="team" width="120" className="img-fluid m-auto" />
                                            <div className="team-content mt-2">
                                                <h6 className="mb-0">Neha Pathak </h6>
                                                <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 6 years</span>
                                                <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Tarot Card Reading"}</ReadMore></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/RamVinodJha.jpeg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0"> Pandit Ram Vinod Jha</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 25 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{" Vedic Astrology, Puja-Anushthan"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/acharya.jpg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Acharya Vijay Sharma</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 40 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Vedic Astrology, Prashna Kundli, Vastu expert"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/dinesh.jpg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Acharya Dinesh Ralli</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 12 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Astrologer & Vastu Aacharya, Vaidik jyotish & Vaidik Vastu"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/neha.jpg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Acharya Neha Mangal</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 18 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Tarot Card Reading, Numerologist, Vastu expert"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/pl.jpg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Acharya P.L. Srivastava </h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 41 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Vedic Astrology, Vastu, Feng-shui"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/Manoranjan.jpeg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Pandit Manoranjan Jha</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 15 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Vedic Astrology, Puja-Anushthan"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/shivi.jpg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Shivi Singhaniaa</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 7 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Tarot Card Reader, Vastu consultant, Signature analysis, Counseling"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/niranjan.jpg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Pandit Niranjan Choudhary</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 15 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Vedic Astrology, Puja-Anushthan"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/Vishesh.jpeg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0"> Vishesh</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 5 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Tarot Card Reading"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-lg-12 ">
                                    <div className="single-team-wrap mh-312 bg-white text-center border rounded p-4 mt-4">
                                        <Avatar image="assets/img/members/Digambar.jpeg" alt="team" width="120" className="img-fluid m-auto" />
                                        <div className="team-content mt-2">
                                            <h6 className="mb-0">Pandit Digambar Shastri</h6>
                                            <span className='font-size-75'>  <span className='font-weight-bold'>Experience:</span> 10 years</span>
                                            <div className='font-size-75 mt-1'><span className='font-weight-bold'>Specialities:</span>  <ReadMore inline={true} className="font-size-75 mt-3">{"Vedic Astrology, Palmistry"}</ReadMore></div>

                                        </div>
                                    </div>
                                </div>

                            </Slider>

                        )}

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default TeamMember;
