import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeroTextBox 
          title="We clean windows and gutters in Kitchener, Ontario"
          subtitle="100% satisfaction guaranteed or the cleaning is free" />
      </header>
    );
  }
}

class HeroTextBox extends Component {
  render() {
    return (
      <div className="header__text-box u-center-vertically u-align-center">
        <h1 className="header__title u-flush">{this.props.title}</h1>
        <p className="header__subtitle">{this.props.subtitle}</p>
        <QuoteButton title="Get an Instant Quote" />
      </div>
    );
  } 
}

class QuoteButton extends Component {
  render() {
    return (
      <a href="/" className="btn btn--header u-push-top color--brand">{this.props.title}</a>
    );
  }
}






export default Header;