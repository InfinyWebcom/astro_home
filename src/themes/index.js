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

class Theme extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="main">
                    <Hero />
                    <Promo />
                    <AboutUs />
                    <Feature />
                    <ScreenShots />
                    <TeamMember />
                    <Testimonial />
                    <Faq />
                    <ContactSection />
                </div>
                <FooterSection />
            </React.Fragment>
        );
    }
}

export default Theme;
