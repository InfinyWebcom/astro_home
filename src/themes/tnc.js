import React, { Component } from "react";

import HeroSection from "../components/HeroSection/TncSection";

class TNC extends Component {
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

export default TNC;
