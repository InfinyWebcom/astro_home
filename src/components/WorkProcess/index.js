import React from "react";
import { connect } from "react-redux";

class WorkProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="process" className={"work-process-section position-relative " + (this.props.removeTop && this.props.removeTop === true ? 'pb-100' : 'ptb-100') + (this.props.isGray && this.props.isGray === true ? 'gray-light-bg' : '')}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-8">
                        <div className="section-heading text-center mb-5">
                            <h2>Our Work Process</h2>
                            <p>
                                Professional hosting at an affordable price. Distinctively recaptiualize principle-centered core competencies through client-centered core competencies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-center justify-content-sm-center">
                    <div className="col-md-12 col-lg-6">
                        <div className="work-process-wrap">
                            <div className="process-single-item">
                                <div className="process-icon-item left-shape">
                                    <div className="d-flex align-items-center">
                                        <div className="process-icon mr-4">
                                            <i className="fas fa-project-diagram color-primary"></i>
                                        </div>
                                        <div className="process-content text-left">
                                            <h5>Planning Idea</h5>
                                            <p>Holisticly architect sustainable meta-services for process-centric core competencies. Enthusiastically re-engineer best-of-breed outsourcing.</p>
                                        </div>
                                    </div>
                                    <svg x="0px" y="0px" width="312px" height="130px">
                                        <path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" strokeWidth="1" strokeDasharray="1300" strokeDashoffset="0" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"></path>
                                        <path className="dashed2" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6" strokeDashoffset="1300" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="process-single-item">
                                <div className="process-icon-item right-shape">
                                    <div className="d-flex align-items-center">
                                        <div className="process-icon ml-4">
                                            <i className="fas fa-puzzle-piece color-primary"></i>
                                        </div>
                                        <div className="process-content text-right">
                                            <h5>Developed Final Product</h5>
                                            <p>Monotonectally harness holistic web-readiness after multimedia based catalysts for change. Completely brand front-end systems before visionary.</p>
                                        </div>
                                    </div>
                                    <svg x="0px" y="0px" width="312px" height="130px">
                                        <path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" strokeWidth="1" strokeDasharray="1300" strokeDashoffset="0" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                                        <path className="dashed2" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6" strokeDashoffset="1300" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="process-single-item">
                                <div className="process-icon-item left-shape mb-0">
                                    <div className="d-flex align-items-center">
                                        <div className="process-icon mr-4">
                                            <i className="fas fa-truck color-primary"></i>
                                        </div>
                                        <div className="process-content text-left">
                                            <h5>Deliver to Customer</h5>
                                            <p>Monotonectally plagiarize synergistic e-business for stand-alone communities. Professionally enhance visionary manufactured products progressive.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="img-wrap">
                            <img src="assets/img/app-mobile-image-3.png" alt="features" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(WorkProcess);