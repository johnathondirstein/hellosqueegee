import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <span className="nav__top-border"></span>
        <div className="u-wrapper u-display-flex u-space-between u-align-items u-flex-wrap">
          <NavLink to="/"><h2 className="nav__logo">Hellosqueegee</h2></NavLink>
          <ul className="nav__list">
            <li className="nav__list-items">
              <NavLink to="/kitchener-gutter-cleaning" activeClassName="u-is-active" className="nav__link">Gutter Cleaning</NavLink>
            </li>
            <li className="nav__list-items">
              <NavLink to="/kitchener-window-cleaning" activeClassName="u-is-active" exact className="nav__link">Window Cleaning</NavLink>
            </li>
            <li className="nav__list-items u-align-center">
              <a href="tel:226-504-2151" className="btn btn--nav">
                <i className="fas fa-phone u-push-right"></i>226-504-2151
                <span className="nav__btn-text">Clean My Windows</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;