import React, { Component } from "react";
import Promo from "../components/PromoSection";
import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSection7";
import AboutUs from "../components/AboutUs/AboutUs1";
import Feature from "../components/Features";
import TeamMember from "../components/TeamMember";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import ScreenShots from '../components/Screenshots'

class Pay extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="vertical-center-one">
          <div style={{ textAlign: 'center' }}>
            <a href='https://play.google.com/store/apps/details?id=com.astrowize&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img alt='Get it on Google Play'
                src='assets/img/logo.png'
                style={{ width: '200px' }}
              />
            </a>

          <h3>Please open this payment link through your mobile.</h3>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Pay;
