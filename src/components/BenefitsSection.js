import React, { Component } from 'react';
import benefitOne from '../images/benefit-1.png';
import benefitTwo from '../images/benefit-2.png';
import benefitThree from '../images/benefit-3.png';

class BenefitsSection extends Component {
  render() {
    return (
      <section className="section--small">
        <div className="u-wrapper">
          <div className="row row--2-columns">
            <div className="column">
              <h2 className="section__title section__title--thick section__title--dark section__title--b-bottom">You save alot of money</h2>
              <p className="paragraph u-push-top--med">Clogged gutters can leave you with thousands of dollars in damage to your home. It's much more affordable to have us give them a quick cleaning.</p>
            </div>
            <div className="column"><img src={benefitOne} alt="You save money" className="u-image-fit u-float-right"/></div>
          </div>

          <div className="row row--2-columns u-push-top--large">
            <div className="column"><img src={benefitTwo} alt="You avoid high ladders" className="u-image-fit u-float-right"/></div>
            <div className="column">
              <h2 className="section__title section__title--thick section__title--dark section__title--b-bottom">You avoid high ladders</h2>
              <p className="paragraph u-push-top--med">We're used to cleaning your windows and gutters from high above the ground. You're better off relaxing and letting us do the hard work.</p>
            </div>
          </div>

          <div className="row row--2-columns u-push-top--large">
            <div className="column">
              <h2 className="section__title section__title--thick section__title--dark section__title--b-bottom">Happiness guaranteed</h2>
              <p className="paragraph u-push-top--med">You have nothing to lose by inviting us over. Our business depends on your happiness, so if you're unhappy with our service, we'll make it right.</p>
            </div>
            <div className="column"><img src={benefitThree} alt="Your happiness is guaranteed or we'll return your money" className="u-image-fit u-float-right"/></div>
          </div>
        </div>
      </section>
    );
  }
}

export default BenefitsSection;