import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'

import blob from './assets/RM_blob_click_here.png'
import facebookIcon from './assets/icons/icons8-facebook-100.png';
import instagramIcon from './assets/icons/icons8-instagram-100.png';
import linkedInIcon from './assets/icons/icons8-linkedin-circled-100.png';

const Home = () => {
	return (
		<div>
				<div className="home-intro">
					Roski Mag is a student run publication at the University of Southern California. We showcase student art and design work.
				</div>
				
				<div className="issue-button">
					<a href="https://tripetto.app/run/1JN2Z6SP8R">
					APPLY HERE
					</a>
				</div>
				
		
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
		</div>
	);
}

export default Home;
