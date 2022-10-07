import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import _data from "../../data";
import AppConfig from 'constants/config'

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
    handleClick = (data) => {
        window.open(`${AppConfig.webUrl}/todays_horoscope?${data}`, "_blank");
    }
    render() {
        return (
            <React.Fragment>
                <section className="promo-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-4">
                                    <h2>{`Daily Horoscope`}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4  col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Aries')} onMouseOver={() => this.setState({ aries: true })} onMouseOut={() => this.setState({ aries: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow" onMouseEnter={() => this.setState({ aries: true })} onMouseOut={() => this.setState({ aries: false })}>
                                    <div className="card-body" onMouseEnter={() => this.setState({ aries: true })} onMouseOut={() => this.setState({ aries: false })}>
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.aries ? "assets/img/aries (1).svg" : "assets/img/aries.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block  pl-4'>Aries</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>21st March - 19th April</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3 ">
                                            <h5 className='d-flex justify-content-center d-md-none'>Aries</h5>
                                            <div>
                                                <p className="mb-0 d-none d-md-block">Eager, dynamic, quick, and competitive. The bold ram is ready to conquer any challenge.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Taurus')} onMouseOver={() => this.setState({ tara: true })} onMouseOut={() => this.setState({ tara: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.tara ? "assets/img/taurus (1).svg" : "assets/img/taurus.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Taurus</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>20th April - 20th May</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none' >Taurus</h5>
                                            <p className="mb-0 d-none d-md-block">Strong, dependable, sensual, and creative. The determined Bull knows that slow and steady wins the race.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Gemini')} onMouseOver={() => this.setState({ gem: true })} onMouseOut={() => this.setState({ gem: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.gem ? 'assets/img/gemini (1).svg' : "assets/img/gemini.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Gemini</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>21st May - 20 June</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Gemini</h5>
                                            <p className="mb-0 d-none d-md-block">Versatile, expressive, curious, and kind. The quick-thinking Twins shake things up.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Cancer')} onMouseOver={() => this.setState({ canc: true })} onMouseOut={() => this.setState({ canc: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.canc ? 'assets/img/cancer (1).svg' : "assets/img/cancer.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Cancer</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>21st June - 22nd July</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Cancer</h5>
                                            <p className="mb-0 d-none d-md-block">Intuitive, sentimental, compassionate, and protective. The sensitive Crab loves to love others.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Leo')} onMouseOver={() => this.setState({ leo: true })} onMouseOut={() => this.setState({ leo: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.leo ? 'assets/img/leo (1).svg' : "assets/img/leo.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Leo</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>23rd July - 22nd Aug</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Leo</h5>
                                            <p className="mb-0 d-none d-md-block">Dramatic, outgoing, fiery, and self-assured. The generous Lion lives to express itself.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Virgo')} onMouseOver={() => this.setState({ virgo: true })} onMouseOut={() => this.setState({ virgo: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.virgo ? 'assets/img/virgo (1).svg' : "assets/img/virgo.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Virgo</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>23rd Aug - 22nd Sept</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Virgo</h5>
                                            <p className="mb-0 d-none d-md-block">Practical, loyal, gentle, and analytical. The discerning Virgin strives for perfection.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Libra')} onMouseOver={() => this.setState({ libra: true })} onMouseOut={() => this.setState({ libra: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.libra ? "assets/img/libra (1).svg" : "assets/img/libra.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Libra</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>23rd Sept - 22nd Oct</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Libra</h5>
                                            <p className="mb-0 d-none d-md-block">Social, fair-minded, diplomatic, and gracious. The peaceful Scales are on a journey of balance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Scorpio')} onMouseOver={() => this.setState({ scorp: true })} onMouseOut={() => this.setState({ scorp: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.scorp ? 'assets/img/scorpio (1).svg' : "assets/img/scorpio.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Scorpio</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>23rd Oct - 21st Nov</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Scorpio</h5>
                                            <p className="mb-0 d-none d-md-block">Passionate, stubborn, resourceful, and brave. The perceptive Scorpion thrives in the depths.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Sagittarius')} onMouseOver={() => this.setState({ sagi: true })} onMouseOut={() => this.setState({ sagi: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.sagi ? 'assets/img/sagittarius (1).svg' : "assets/img/sagittarius.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Sagittarius</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>22nd Nov - 21st Dec</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Sagittarius</h5>
                                            <p className="mb-0 d-none d-md-block">Extrovert, optimistic, funny, and generous. The far-seeing Archer is always expanding.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Capricorn')} onMouseOver={() => this.setState({ capri: true })} onMouseOut={() => this.setState({ capri: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.capri ? 'assets/img/capricorn (1).svg' : "assets/img/capricorn.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Capricorn</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>22nd Dec - 19th Jan</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none'>Capricorn</h5>
                                            <p className="mb-0 d-none d-md-block">Serious, independent, disciplined, and tenacious. The ambitious Goat is always at the top.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Aquarius')} onMouseOver={() => this.setState({ aquri: true })} onMouseOut={() => this.setState({ aquri: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.aquri ? 'assets/img/aquarius (1).svg' : "assets/img/aquarius.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Aquarius</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>20th Jan - 18th Feb</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='d-flex justify-content-center d-md-none'>Aquarius</h5>
                                            <p className="mb-0 d-none d-md-block">Deep, imaginative, original, and uncompromising. The worldly Water-bearer marches to its own beat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-4 col-sm-4 col-md-6 col-lg-3 cursor-pointer" onClick={() => this.handleClick('Pisces')} onMouseOver={() => this.setState({ pisc: true })} onMouseOut={() => this.setState({ pisc: false })}>
                                <div className="card border-0 single-promo-card single-promo-hover p-2 mt-4 shadow">
                                    <div className="card-body">
                                        <div className="pb-2 displayFlex justify-content-center justify-content-md-start">
                                            <img src={this.state.pisc ? 'assets/img/pisces (1).svg' : "assets/img/pisces.svg"} alt="group shape" width="38" className="icon-size-md color-secondary" />
                                            <div>
                                                <div>
                                                    <h5 className=' d-none d-md-block pl-4'>Pisces</h5>
                                                    <h6 className=' d-none d-md-block  pl-4 font-size-60'>19th Feb - 20th March</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <h5 className='displayFlex justify-content-center justify-content-md-start d-md-none' >Pisces</h5>
                                            <p className="mb-0 d-none d-md-block">Affectionate, empathetic, wise, and artistic. The dreamy Fishes flow with the currents.</p>
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
}))(withRouter(PromoSection));
