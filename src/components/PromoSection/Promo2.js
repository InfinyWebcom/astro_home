import React from "react";
import { connect } from "react-redux";
import _data from "../../data";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      promo: _data.promo
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="promo-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center">
                            <h2>Why Apdash Different?</h2>
                            <p>Uniquely repurpose strategic core competencies with progressive content. Assertively transition ethical imperatives and collaborative manufactured products. </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center justify-content-sm-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-cubes icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Fully functional</h5>
                                    <p className="mb-0">Phosfluorescently target bleeding sources through viral methodsp progressively expedite empowered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-headset icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>24/7 Live Chat</h5>
                                    <p className="mb-0">Enthusiastically productivate interactive interfaces after energistically scale client-centered catalysts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 single-promo-card single-promo-hover text-center p-2 mt-4">
                            <div className="card-body">
                                <div className="pb-2">
                                    <span className="fas fa-lock icon-size-lg color-primary"></span>
                                </div>
                                <div className="pt-2 pb-3">
                                    <h5>Secure Data</h5>
                                    <p className="mb-0">Synergistically architect virtual content solutions. Monotonectally communicate cooperative solutions.</p>
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

export default connect(state => ({
  state
}))(PromoSection);
