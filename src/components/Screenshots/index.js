import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

import _data from "../../data";
import './index.css';


class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {},
      value: 0,

    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }
  getText = () => {
    switch (this.state.value) {
      case 0:
        return 'Simple steps to register on our app. We don’t share any of your information on any social media platforms'
      case 1:
        return 'Enter your One Time Password to get started'
      case 2:
        return 'Explore through our app seamlessly and choose the services you would want to avail. Or you can simply check your daily horoscope predictions'
      case 3:
        return 'To create a profile, fill in the required details and click on save'
      case 4:
        return 'Get in touch with the experts on Astrowize through an audio call, video call, or chat messages'
      case 5:
        return 'You’re all set to go! Our ace experts are always at your disposal. See what holds the future for you and your partner. Take the highly effective compatibility test from our experts'
      case 6:
        return 'Get your kundali reading or kundali made in just one click'
      case 7:
        return 'See the most favourable date and timings to conduct an auspicious task according to the daily Panchang'
      case 8:
        return 'Get in touch with the experts on Astrowize through an audio call, video call, or chat messages'
      case 9:
        return 'Get a comprehensive and timely report from the experts you’ve consulted to know your progress or predictions'
      default:
        return 'Simple steps to register on our app. We don’t share any of your information on any social media platforms'
    }
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "62px",
      slidesToShow: 3,
      adaptiveHeight: false,
      arrows: false,
      speed: 500,
      autoplay: true,
      beforeChange: (current, next) => this.setState({ value: next }),
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
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
    let { value } = this.state
    // console.log('value====', value)
    return (
      <React.Fragment>
        <section id="screenshots" className={"screenshots-section pb-100 " + (this.props.removeTop && this.props.removeTop === true ? '' : 'pt-100') + (this.props.isWhite && this.props.isWhite === true ? '' : ' gray-light-bg')}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>How it works</h2>
                  <p>{this.getText()} </p>
                </div>
              </div>
            </div>
            <div className="screenshot-wrap">
              <div className="screenshot-frame"></div>
              {/* <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                <img src="assets/img/01.jpeg" className="img-fluid" alt="screenshots" />
                <img src="assets/img/02.jpeg" className="img-fluid" alt="screenshots" />
                <img src="assets/img/03.jpeg" className="img-fluid" alt="screenshots" />
                <img src="assets/img/04.jpeg" className="img-fluid" alt="screenshots" />
                <img src="assets/img/05.jpeg" className="img-fluid" alt="screenshots" />
                <img src="assets/img/06.jpeg" className="img-fluid" alt="screenshots" />
    </div>*/}
              <Slider {...settings}>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/01.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/02.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/03.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/04.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/05.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/06.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/07.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/08.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/09.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
                <div style={{ width: '277px' }}>
                  <img src="assets/img/10.jpg" className="img-fluid slick-image" alt="screenshots" />
                </div>
              </Slider>

            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(Screenshots);