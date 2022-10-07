import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import Theme3 from "../themes";
import Pay from "../themes/pay";

import Login from "../themes/login";
import SignUp from "../themes/signup";
import ResetPassword from "../themes/resetPassword";
import Faq from "../themes/faq";
import NotFound from "../themes/404";
import ComingSoon from "../themes/comingSoon";
import ThankYou from "../themes/thankYou";
import Team from "../themes/team";
import SingleTeam from "../themes/singleTeam";
import BlogDefault from "../themes/blogDefault";
import BlogNoSidebar from "../themes/blogNoSidebar";
import BlogLeftSidebar from "../themes/blogLeftSidebar";
import BlogRightSidebar from "../themes/blogRightSidebar";
import BlogSingleLeftSidebar from "../themes/blogSingleLeftSidebar";
import BlogSingleRightSidebar from "../themes/blogSingleRightSidebar";
import Yourhoroscope from "../components/horoscope";
import AboutUs from "../themes/aboutUs";
import ContactUs from "../themes/contactUs";
import TnC from '../themes/tnc'
import PrivacyPolicy from '../themes/privacyPolicy'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class Routes extends React.PureComponent {

  componentDidMount() {
    // let url = document.location.href;
    // console.log('Test: url', url);
    // if(url.includes('pay')) {
    //   window.location.replace('https://astrowize.com/pay');
    // }
  }

  render() {
    return (
      <React.Fragment>
        <NotificationContainer />
        <Router>
          <Switch>
            <Route exact path="/" component={Theme3} />
            <Route exact path="/pay" component={Pay} />
            <Route path='/todays_horoscope' component={Yourhoroscope} />
            <Route exact path="/become_an_astrologer" component={SignUp} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route path='/tnc' component={TnC} />
            <Route path='/astro_tnc' component={TnC} />
            <Route path='/privacy_policy' component={PrivacyPolicy} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/contactUs" component={ContactUs} />
            {/* <Route exact path="/pay?request_id=:id" component={ContactUs} /> */}

          </Switch>
        </Router>
        
      </React.Fragment>
    );
  }
}
