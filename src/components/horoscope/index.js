import React, { Component } from 'react';
import Axios from 'constants/axiosRequest'
import Header from "../Header/header2";
class Horoscope extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount = async () => {
        console.log('this.props', this.props.location.search)
        let astro_sign = this.props.location.search ? this.props.location.search.replace('?', '') : ''
        this.setState({ dateRange: this.getDateRange(astro_sign.toLowerCase()) })
        let data = await Axios.axiosHelperFunc('post', 'user/getHoroscope', { astro_sign })
        if (data.data && data.data.error == false) {
            this.setState({ prediction: data.data.data.prediction, })
        }
    }
    getDateRange = (data) => {
        console.log('dateRange', data)
        switch (data) {
            case 'aries':
                return { range: '(March 21 - April 19)', statement: 'Eager, dynamic, quick, and competitive. The bold ram is ready to conquer any challenge.' }
            case 'taurus':
                return { range: '(April 20 - May 20)', statement: 'Strong, dependable, sensual, and creative. The determined Bull knows that slow and steady wins the race.' }
            case 'gemini':
                return { range: '(May 21 - June 20)', statement: 'Versatile, expressive, curious, and kind. The quick-thinking Twins shake things up.' }
            case 'cancer':
                return { range: '(June 21 - July 22)', statement: 'Intuitive, sentimental, compassionate, and protective. The sensitive Crab loves to love others.' }
            case 'leo':
                return { range: '(July 23 - August 22)', statement: 'Dramatic, outgoing, fiery, and self-assured. The generous Lion lives to express itself.' }
            case 'virgo':
                return { range: '(August 23 - September 22)', statement: 'Practical, loyal, gentle, and analytical. The discerning Virgin strives for perfection.' }
            case 'libra':
                return { range: '(September 23 - October 22)', statement: 'Social, fair-minded, diplomatic, and gracious. The peaceful Scales are on a journey of balance.' }
            case 'scorpio':
                return { range: '(October 23 - November 21)', statement: 'Passionate, stubborn, resourceful, and brave. The perceptive Scorpion thrives in the depths.' }
            case 'sagittarius':
                return { range: '(November 22 - December 21)', statement: 'Extrovert, optimistic, funny, and generous. The far-seeing Archer is always expanding.' }
            case 'capricorn':
                return { range: '(December 22 - January 19)', statement: 'Serious, independent, disciplined, and tenacious. The ambitious Goat is always at the top.' }
            case 'aquarius':
                return { range: '(January 20 - February 18)', statement: 'Deep, imaginative, original, and uncompromising. The worldly Water-bearer marches to its own beat.' }
            case 'pisces':
                return { range: '(February 19 - March 20)', statement: 'Affectionate, empathetic, wise, and artistic. The dreamy Fishes flow with the currents.' }
        }
    }
    render() {
        const { prediction, dateRange } = this.state
        console.log('dateRange', dateRange)
        let astro_sign = this.props.location.search ? this.props.location.search.replace('?', '') : ''
        return (
            <React.Fragment>
                <Header horoscope={'fixedHeader'} />

                <div className='main mt-5'>
                    <React.Fragment>
                        <section id="faq" className={"ptb-100 gray-light-bg"}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-9 col-lg-8">
                                        <div className="section-heading text-center mb-5 mt-2">
                                            <h2>{`Today's Horoscope For ${astro_sign}`}</h2>
                                            <p className='astroRange'>{dateRange ? dateRange.range ? dateRange.range : '' : ''}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0 align-self-center">
                                        <div className="img-wrap mx-auto text-center">
                                            <img src={astro_sign ? `assets/img/${(astro_sign.trim()).toLowerCase()}.png` : "assets/img/health.png"} alt="download" className="img-fluid imge-horoscope" />

                                        </div>
                                        <p className='mt-2 astroSignText'>{dateRange ? dateRange.statement ? dateRange.statement : '' : ''}</p>

                                    </div>
                                    {prediction && <div className="col-md-12 col-lg-6">
                                        <div id="accordion" className="accordion faq-wrap">
                                            <div className="card mb-3">
                                                <a className="card-header " data-toggle="collapse" href="#collapse0" aria-expanded="true">
                                                    <h6 className="mb-0 d-inline-block">Emotions</h6>
                                                </a>
                                                <div id="collapse0" className="collapse show" data-parent="#accordion">
                                                    <div className="card-body white-bg">
                                                        <p>{prediction.emotions}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card my-3">
                                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse1" aria-expanded="true">
                                                    <h6 className="mb-0 d-inline-block">Health</h6>
                                                </a>
                                                <div id="collapse1" className="collapse " data-parent="#accordion">
                                                    <div className="card-body white-bg">
                                                        <p>{prediction.health} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card my-3">
                                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="true">
                                                    <h6 className="mb-0 d-inline-block">Luck</h6>
                                                </a>
                                                <div id="collapse2" className="collapse " data-parent="#accordion">
                                                    <div className="card-body white-bg">
                                                        <p>{prediction.luck} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mt-3">
                                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="true">
                                                    <h6 className="mb-0 d-inline-block">Personal Life</h6>
                                                </a>
                                                <div id="collapse3" className="collapse " data-parent="#accordion">
                                                    <div className="card-body white-bg">
                                                        <p>{prediction.personal_life}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mt-3">
                                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse4" aria-expanded="true">
                                                    <h6 className="mb-0 d-inline-block">Profession</h6>
                                                </a>
                                                <div id="collapse4" className="collapse " data-parent="#accordion">
                                                    <div className="card-body white-bg">
                                                        <p>{prediction.profession}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mt-3">
                                                <a className="card-header collapsed" data-toggle="collapse" href="#collapse5" aria-expanded="true">
                                                    <h6 className="mb-0 d-inline-block">Travel</h6>
                                                </a>
                                                <div id="collapse5" className="collapse " data-parent="#accordion">
                                                    <div className="card-body white-bg">
                                                        <p>{prediction.travel}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
                </div>
            </React.Fragment >
        );
    }
}

export default Horoscope;