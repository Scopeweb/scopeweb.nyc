import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Navbar from '../Global/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import ServiceCards from './ServiceCards/ServiceCards';
import Services from './Services/Services';
import CaseStudies from './CaseStudies/CaseStudies';
import About from './About/About';
import Footer from '../Global/Footer/Footer';
import ContactForm from '../Global/ContactForm/ContactForm';

export const initGA= () => {
  console.log('GAinit')
  ReactGA.initialize('UA-129909734-1')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname})
  ReactGA.pageview(window.location.pathname)
}

class Home extends Component {

  componentDidMount () {
    initGA()
    logPageView()
  }

	render() {

		return (
      <React.Fragment>
        <Helmet 
          title="Scope Web Agency | NYC Web Design &amp; Development experts"
          description="Hi. We are Scope Web. An award-winning web development &amp; design agency from NYC. We're a creative design, digital and content agency. We produce affordable, great design that achieves your objectives."
        />
        <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
        <div className="pr__hero__wrap" id="site-hero">
          {/* <div className="pr__hero__wrap" style={{backgroundImage: `url(${HeroBG})`}} id="site-hero"> */}
            <Navbar />
            <Jumbotron />
            <ServiceCards />
          </div>
          <div className="pr__content" id="site-content">
            <hr className="pr__vr__section" />
            <Services />
            <hr className="pr__vr__section" />
            <CaseStudies />
            <hr className="pr__vr__section" />
            <About />
            <hr className="pr__vr__section" />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;