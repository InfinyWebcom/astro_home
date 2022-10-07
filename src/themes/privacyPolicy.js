import React, { Component } from "react";

import HeroSection from "../components/HeroSection/privacyPolicy";

class Privacy extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <HeroSection history={this.props.history} />
                </div>
            </React.Fragment>
        );
    }
}

export default Privacy;
