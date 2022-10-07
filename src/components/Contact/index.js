import React, { Component } from "react";
import { connect } from "react-redux";
import { submitContact } from "../../actions/index";
import _data from "../../data";
import { signUp } from "../../actions/index";
import { required, emailField, number, validatePhone, speciaCharacter, latlong, arrayData, validatePinCode } from 'constants/validations';
import { Field, reduxForm, change } from 'redux-form'
import TextField from 'components/textField'
import { NotificationManager } from 'react-notifications';
import Axios from 'constants/axiosRequest'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disableContactBtn: false,
      contactBtnText: "Send Message",
      contact: {}
    };
    this.message = this.message.bind(this);
  }

  /**
   * When we click on Send button, changeBtnText function will help to change text
   * @param contactBtnText
   */
  changeBtnText = contactBtnText => {
    this.setState({ contactBtnText });
  };

  /**
   * Get all form data and set to the state
   * @param contactBtnText
   */
  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  /**
   * Submit the form and dispatch to the store
   * @param contactBtnText
   */
  handleSubmit2 = async (event) => {
    const { values } = this.props.contactus
    let data = await Axios.axiosHelperFunc('post', 'admin/getStartedHome', { email: values.email, name: values.name, message: values.message })
    if (data.data && data.data.error == false) {
      NotificationManager.success(data.data.title)
      this.props.reset()
    } else {
      NotificationManager.error(data.data.title)
    }

  }

  message(error) {
    const messageBox = document.querySelector('#contact .message-box');
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
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      contact: _data.contact
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <React.Fragment>
        <section id="contact" className="contact-us-section ptb-100 ">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-12 pb-3 mb-4 message-box d-none alert alert-success"></div>
              <div className="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                <div className="contact-us-form gray-light-bg rounded p-5">
                  <h4>Drop in a query and we will get back to you at the earliest.</h4>
                  <form action="" method="POST" id="contactForm" className="contact-us-form" onSubmit={handleSubmit(this.handleSubmit2)}>
                    <div className="form-row">
                      <div className="col-12">
                        <div className="form-group">
                          <Field name="name" type="text"
                            component={TextField}
                            fullWidth={true}
                            validate={[required, speciaCharacter]}
                            label='Enter Name'
                            margin="normal"
                            classNameField='form-control '


                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <Field name="email" type="text"
                            component={TextField}
                            fullWidth={true}
                            validate={[required, emailField]}
                            label='Enter email'
                            margin="normal"
                            classNameField='form-control '


                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <Field name="message" type="textarea"
                            component={TextField}
                            fullWidth={true}
                            validate={[required, speciaCharacter]}
                            label='Message'
                            margin="normal"
                            classNameField='form-control '


                          />
                        </div>
                      </div>
                      <div className="col-sm-12 mt-3">
                        <button type="submit" className="btn btn-brand-02" id="btnContactUs" disabled={this.props.submitting} >
                          {this.props.submitting ? 'Sending Message...' : 'Send Message'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="contact-us-content">
                  <h2>{this.state.contact.title}</h2>
                  <p className="lead">{this.state.contact.description}</p>

                  <hr className="my-5" />

                  <ul className="contact-info-list">

                    <li className="d-flex pb-3">
                      <div className="contact-icon mr-3">
                        <span className={(this.state.contact.emailIcon) + " color-primary rounded-circle p-3"}></span>
                      </div>
                      <div className="contact-text">
                        <h5 className="mb-1">{this.state.contact.emailTitle}</h5>
                        <p>
                          hello@astrowize.com
                        </p>
                      </div>
                    </li>
                  </ul>

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

  const { contactus } = form
  return { contactus }
};
Contact = connect(
  mapStateToProps,
  {}              // bind account loading action creator
)(Contact)
Contact = reduxForm({
  form: 'contactus',// a unique identifier for this form
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: true
})(Contact)
export default Contact
