import React from "react";
import { connect } from "react-redux";
import _data from "../../data";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      hero: _data.hero
    });
  }

  render() {
    console.log('image====', this.props.slide)
    return (
      <React.Fragment>

        <div key={this.props.key} className="container" >
          {this.props.text && <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-md-12 col-lg-6">
              <div className="section-heading text-white py-5">
                {this.props.text && <h1 className="text-white font-weight-bold">{this.props.text}</h1>}
                {this.props.text && <p>{this.props.subtext}</p>}
                {this.props.text && <div className="action-btns mt-4">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="/#" className="d-flex align-items-center app-download-btn btn btn-white btn-rounded">
                        <span className="fab fa-apple icon-size-sm mr-3 color-primary"></span>
                        <div className="download-text text-left">
                          <small>Download form</small>
                          <h5 className="mb-0">App Store</h5>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="d-flex align-items-center app-download-btn btn btn-white btn-rounded">
                        <span className="fab fa-google-play icon-size-sm mr-3 color-primary"></span>
                        <div className="download-text text-left">
                          <small>Download form</small>
                          <h5 className="mb-0">Google Play</h5>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>}
              </div>
            </div>
            {<div className="col-md-7 col-sm-9 col-lg-6">
              <div className="hero-animation-img">
                {this.props.text && <img className="img-fluid position-relative img-custom-width" src="assets/img/hero-angle-2.svg" alt="animation" />}
              </div>
            </div>}
          </div>}
        </div>

      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);
