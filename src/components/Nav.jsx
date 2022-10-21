import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

import logo from './assets/RM_logo.png';

export default class Nav extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>

        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>

        <ul class="menu">
          <li>
            <div className = "link-padding"><Link to="/archive">MAGS</Link></div>
          </li>

          <li>
           <div className = "link-padding"><Link to="/submissions">SUBMISSIONS</Link></div>
          </li>

          <li>
            <div className = "link-padding"><a href="https://medium.com/@roskimag">BLOG</a></div>
          </li>
        </ul>

      </div>
    )
  }
}
