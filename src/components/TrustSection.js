import React, { Component } from 'react';

class TrustSection extends Component {
  render() {
    return (
      <div className="section--primary section--small u-align-center">
          <div className="row row--1-column">
            <h2 className="section__title u-flush">{this.props.title}</h2>
          </div>
          <div className="row row--3-columns paragraph u-push-top">
            <div className="column">
              <p><i className="fas fa-check icon--green u-push-right"></i>100% money back guarantee</p>
            </div>
            <div className="column">
              <p><i className="fas fa-check icon--green u-push-right"></i>We're available on weekends</p>
            </div>
            <div className="column">
              <p><i className="fas fa-check icon--green u-push-right"></i>Booking is fast and easy</p>
            </div>
          </div>
      </div>
    );
  }
}

export default TrustSection;