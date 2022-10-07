import React from "react";
import { connect } from "react-redux";
import { postQuote } from "../../actions/index";
import _data from "../../data";
import { required, emailField, number, validatePhone, speciaCharacter, latlong, arrayData, validateDate } from 'constants/validations';
import { Field, reduxForm, getFormInitialValues, initialize } from 'redux-form'
import asyncValidate from 'constants/asyncValidate'
import TextField from 'components/textField'
import SelectField from 'components/multiSelect'
import { NotificationManager } from 'react-notifications';
import { withRouter } from 'react-router-dom'
import Axios from 'constants/axiosRequest'
import DateTimePicker from 'components/DateField'
import Slider from "react-slick";
import HeroSection2 from './HeroSection2'

class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {},
            name: "",
            email: "",
            message: "",
            isAgreed: false,
            disableBtn: false,
            btnText: "Send your query",
            value: 0
        };

        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.message = this.message.bind(this);
    }

    changeBtnText = btnText => {
        this.setState({ btnText });
    };
    handleDate = () => {

    }

    handleFormValueChange(inputName, event) {
        let stateValue = {};
        stateValue[inputName] =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        this.setState(stateValue);
    }

    handleSubmit2 = async (event) => {
        const { values } = this.props.callrequest
        let data = await Axios.axiosHelperFunc('post', 'callRequest/addCallRequest', { email: values.email, name: values.first_name, mobile: values.mobile, preferred_time: values.preferred_time })
        if (data.data && data.data.error == false) {
            NotificationManager.success('Call request sent successfully')
            this.props.history.push('/')
        } else {
            NotificationManager.error(data.data.title)
        }
    }


    message(error) {
        const messageBox = document.querySelector('.sign-up-form-wrap .message-box');
        if (messageBox.classList.contains("d-none")) {
            messageBox.classList.remove("d-none");
        }
        messageBox.classList.add("d-block");
        if (error) {
            if (messageBox.classList.contains("alert-success")) {
                messageBox.classList.remove("alert-success");
            }
            messageBox.classList.add("alert-danger");
            messageBox.innerHTML = 'Found error in the form. Please check again.';
        }
        else {
            if (messageBox.classList.contains("alert-danger")) {
                messageBox.classList.remove("alert-danger");
            }
            messageBox.classList.add("alert-success");
            messageBox.innerHTML = 'Form submitted successfully';
        }
    }

    componentDidMount() {
        /**
         * Your ajax/ saga/ thunk call will goes here to get data then call setState
         */
        console.log('in did mount')
        this.props.initialize({ 'preferred_time': null })

        this.setState({
            hero: _data.hero
        });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        console.log('props===========', this.props)
        let isLive = false
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: false,
            arrows: false,
            speed: 500,
            autoplay: false,
            beforeChange: (current, next) => this.setState({ value: next }),

        };
        let screeenShots = [{
            name: 'App1.png',
            title: ''
        },
        {
            name: 'App2.png'
        }, {
            name: 'App3.png'
        }, {
            name: 'App4.png'
        }]
        console.log('url===', `url(assets/img/${screeenShots[this.state.value].name})`)
        return (
            <React.Fragment>
                {!isLive && <section className="ptb-100 hero-bg-shape">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">

                            <div className="col-md-12 col-lg-6">
                                <div className="hero-slider-content text-white py-4">
                                    <img src="assets/img/logo (1).png"
                                        alt="logo" className="img-fluid mb-3 imageAnim" />
                                    <p className="lead ">A holistic approach to all your life problems. Speak to Astrowize’s experts and be absolutely certain about receiving effective solutions</p>

                                    <div className="action-btns mt-4">

                                        <a href="#client_says" className='text-white text-decoration-underline page-scroll'> <span className="">Watch what our clients have to say</span></a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-7 col-sm-9 col-lg-5">
                                <div className="sign-up-form-wrap position-relative z-index shadow-lg rounded p-5 w-100 gray-light-bg">
                                    <div className="sign-up-form-header text-center  ">
                                        <h4 className="mb-4">Download App</h4>
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        <a href='https://play.google.com/store/apps/details?id=com.astrowize&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                            <img alt='Get it on Google Play'
                                                src='assets/img/appbadges/androidPlayStore.png'
                                                style={{ width: '170px' }}
                                            />
                                        </a>
                                        {/* <br />
                                        <img alt='Get it on Google Play'
                                            src='assets/img/appbadges/iosAppStore.png'
                                            style={{ width: '170px', marginTop: '10px' }}
                                        /> */}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-12 col-lg-6">
                                <div className="hero-slider-content text-white hidemargin">
                                    <p className="lead">Download consumer app</p>
                                </div>
                                <a href='https://play.google.com/store/apps/details?id=com.astrowize&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                    <img alt='Get it on Google Play'
                                        src='assets/img/appbadges/androidPlayStore.png'
                                        style={{ width: '170px' }}
                                    />
                                </a>
                                <br />
                                <img alt='Get it on Google Play'
                                    src='assets/img/appbadges/iosAppStore.png'
                                    style={{ width: '170px', marginTop: '10px' }}
                                />
                                <div className="message-box d-none alert alert-success"></div>
                            </div> */}

                        </div>
                    </div>
                </section>
                }
                {
                    isLive && <section className=" homeSlick" style={{
                        // backgroundImage: `url(assets/img/${screeenShots[this.state.value].name})`,
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "bottom center",
                        // backgroundSize: "cover",
                        // minHeight: '68rem'

                    }} > <Slider {...settings}>
                            {
                                screeenShots.map((val, key) => <img src={`assets/img/${val.name}`} key={key} slide={val.name} text={val.title} subtext={'Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.'} />)
                            }
                        </Slider>
                    </section>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ contact, form }) => {

    const { callrequest } = form
    return { contact, callrequest }
};
HeroSection = connect(
    mapStateToProps,
    {}              // bind account loading action creator
)(HeroSection)
HeroSection = reduxForm({
    form: 'callrequest',// a unique identifier for this form
    // asyncValidate,
    keepDirtyOnReinitialize: true,
    destroyOnUnmount: true,
    initialValues: getFormInitialValues('callrequest')(),
    onSubmitSuccess: (result, dispatch) => {
        const newInitialValues = getFormInitialValues('callrequest')();
        dispatch(initialize('callrequest', newInitialValues));
    },
})(HeroSection)

export default withRouter(HeroSection);

