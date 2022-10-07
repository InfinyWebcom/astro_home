import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/index";
import { required, emailField, number, validatePhone, speciaCharacter, latlong, arrayData, validatePinCode, notDecimal } from 'constants/validations';
import { Field, reduxForm, change } from 'redux-form'
import asyncValidate from 'constants/asyncValidate'
import TextField from 'components/textField'
import SelectField from 'components/multiSelect'
import { NotificationManager } from 'react-notifications';
import Axios from 'constants/axiosRequest'
class HeroSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {},
            name: "",
            email: "",
            languageLists: [],
            specialityLists: [],
            speciality: [],
            password: "",
            isAgreed: false,
            disableBtn: false,
            btnText: "Sign up",
        };

        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.message = this.message.bind(this);
    }

    changeBtnText = btnText => {
        this.setState({ btnText });
    };
    getSpeciality = async () => {
        let data = await Axios.axiosHelperFunc('post', 'admin/getSpecialitiesList', {})
        if (data.data && data.data.error == false) {
            this.setState({ specialityLists: data.data.data })
        }
    }
    componentDidMount = () => {
        this.getSpeciality()
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
        if (this.state.isAgreed) {
            const { values } = this.props.addastrolger
            let specialities = values.specialities.map((val) => val._id ? val._id : val)
            let data = await Axios.axiosHelperFunc('post', 'admin/addAstrologer', { email: values.email, first_name: values.first_name, user_type: 'astrologer', mobile: values.mobile, experience_years: values.experience, specialities, referral_code: values.referral_code })
            if (data.data && data.data.error == false) {
                NotificationManager.success(data.data.title)
                this.props.history.push('/')
            } else {
                NotificationManager.error(data.data.title)
            }
        } else {
            NotificationManager.error('Please agree to terms and conditions')
        }

    }
    handleSpecialityChange = (e) => {
        this.setState({
            speciality: e.target.value
        });
    }

    message(error) {
        const messageBox = document.querySelector('.login-signup-wrap .message-box');
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

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <React.Fragment>
                <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
                    <div className="background-image-wraper" style={{
                        backgroundImage: "url(assets/img/big_image.jpg)",
                        opacity: 1
                    }}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-9 col-lg-9">
                                <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                                    <div className="login-signup-header text-center">
                                        <a href="/"><img style={{ height: '75px', width: 'auto' }} src="assets/img/logo.png" className="img-fluid mb-3" alt="Logo" /></a>
                                        <h4 className="mb-5">Become An Astrologer</h4>
                                    </div>
                                    <form className="login-signup-form row" onSubmit={handleSubmit(this.handleSubmit2)}>
                                        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'>
                                            <Field name="first_name" type="text"
                                                component={TextField}
                                                fullWidth={true}
                                                validate={[required, speciaCharacter]}
                                                label='Your Name'
                                                icon='user'
                                                margin="normal"
                                                classNameField='form-control form-control-lg col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'


                                            />
                                        </div>
                                        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'>
                                            <Field name="email" type="text"
                                                component={TextField}
                                                fullWidth={true}
                                                icon='email'
                                                validate={[required, emailField]}
                                                label='Your Email'
                                                margin="normal"
                                                classNameField='form-control form-control-lg col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'


                                            />
                                        </div>
                                        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'>
                                            <Field name="mobile" type="text"
                                                icon='mobile'
                                                component={TextField}
                                                fullWidth={true}
                                                validate={[required, validatePhone]}
                                                label='Contact No.'
                                                margin="normal"
                                                classNameField='form-control form-control-lg col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'


                                            />
                                        </div>
                                        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'>
                                            <Field name="experience" type="number"
                                                component={TextField}
                                                icon='tag'
                                                fullWidth={true}
                                                validate={[required, number, notDecimal]}
                                                label='Experience'
                                                margin="normal"
                                                classNameField='form-control form-control-lg col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'


                                            />
                                        </div>
                                        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'>
                                            <Field name="referral_code" type="text"
                                                icon='flag'
                                                component={TextField}
                                                fullWidth={true}
                                                // validate={[required]}
                                                label='Referral Code'
                                                margin="normal"
                                                classNameField='form-control form-control-lg col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'


                                            />
                                        </div>
                                        <div className='col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6'>
                                            <div className="form-group">
                                                <label className="pb-1">
                                                    Specialities
                                            </label>
                                                <Field name="specialities" type="select"
                                                    component={SelectField} label=""
                                                    fullWidth={true}
                                                    validate={required}
                                                    margin="normal"
                                                    data={this.state.specialityLists}
                                                    value={this.state.speciality}
                                                    value1={this.state.speciality}
                                                    classNameField='form-control form-control-lg'

                                                    multiple={true}
                                                    onChange={(e) => this.handleSpecialityChange(e)}

                                                />
                                            </div>
                                        </div>


                                        <div className='col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12'>
                                            <div className="my-2">
                                                <div className="custom-control custom-checkbox mb-1">
                                                    <input checked={this.state.isAgreed} onChange={e => this.handleFormValueChange("isAgreed", e)} type="checkbox" className="custom-control-input" id="check-terms" />
                                                    <label className="custom-control-label small-text" htmlFor="check-terms">I agree to the <a href="/astro_tnc" target='blank'>Terms &amp; Conditions</a></label>
                                                </div>
                                            </div>

                                            <button type='submit' className="btn btn-block btn-brand-02 border-radius mt-0 mb-3" disabled={submitting} >
                                                {submitting ? 'Submitting ....' : 'Submit'}
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6">
                                <div className="copyright-wrap small-text text-center mt-5 text-white">
                                    <p className="mb-0">&copy; ThemeTags Design Agency, All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ contact, form }) => {

    const { addastrolger } = form
    return { contact, addastrolger }
};
HeroSection = connect(
    mapStateToProps,
    {}              // bind account loading action creator
)(HeroSection)
HeroSection = reduxForm({
    form: 'addastrolger',// a unique identifier for this form
    asyncValidate,
    keepDirtyOnReinitialize: true,
    destroyOnUnmount: true
})(HeroSection)

export default HeroSection;
