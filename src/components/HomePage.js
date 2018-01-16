import React, { Component } from 'react';
import Header from './Header';
import TrustSection from './TrustSection';
import BenefitsSection from './BenefitsSection';

class Homepage extends Component {
  render() {
    return (
        <div>
          <Header />
          <main>
            <TrustSection title="See why we're your neighbours favourite local window cleaners" />
            <BenefitsSection />
          </main>
        </div>
    );
  }
}




export default Homepage;