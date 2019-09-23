import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Social_Footer.css';

import facebookIcon from './assets/icons/icons8-facebook-100.png';
import instagramIcon from './assets/icons/icons8-instagram-100.png';
import linkedInIcon from './assets/icons/icons8-linkedin-circled-100.png';

export default class SocialFooter extends Component {
  render() {
    return (
      <div className="footer-container">
        <a href="https://www.facebook.com/roskimag/" target="_blank">
        <img src={facebookIcon} className="icon"/>
        </a>
        <a href="https://www.instagram.com/roskimag/?hl=e" target="_blank">
        <img src={instagramIcon} className="icon"/>
        </a>
        <a href="https://www.linkedin.com/company/roskimag/about/" target="_blank">
        <img src={linkedInIcon} className="icon"/>
        </a>
      </div>
    )
  }
}
