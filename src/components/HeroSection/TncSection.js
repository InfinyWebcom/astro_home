import React, { Component } from 'react';
import Axios from 'constants/axiosRequest'
class Tnc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    componentDidMount = async () => {
        console.log('this.props.histtory', this.props.history.location.pathname.split('/'))
        let data = await Axios.axiosHelperFunc('post', 'admin/getContentByName', { name: this.props.history.location.pathname.split('/')[1] })
        console.log('data====', data.data.data.content)
        if (data && data.data.error == false) {
            this.setState({ value: data.data.data.content })
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image full-height removeBefore" image-overlay="8">
                    <div className="background-image-wraper "></div>
                    <div className="container mt-5">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="login-signup-wrap p-5">
                                    <div className="login-signup-header text-left">
                                        <a href="/"><img style={{ height: '100px', width: 'auto' }} src="assets/img/astro_logo.png" className="img-fluid mb-3" alt="Logo" /></a>
                                        <h4 className="mb-5">Terms and Conditions</h4>
                                    </div>
                                    <div className='row mh-75' >
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div dangerouslySetInnerHTML={{ __html: this.state.value }}></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6">
                                <div className="copyright-wrap small-text text-center mt-3 text-white">
                                    <p className="mb-0">&copy; AstroWize, All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Tnc