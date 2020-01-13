import React from 'react';
import './css/Home.css'

import blob from './assets/RM_blob_click_here.png'

const Home = () => {
	return (
		<div className="home-container">
			<div className="home-body">
				Roski Mag is a student run publication at the University of Southern California. We showcase student art and design work.
			</div>
			<div className="home-apply">
				<a href="https://roskimag.typeform.com/to/utMVJ3" target="_blank"><img src={blob} alt="blob" className="home-vector1" /></a>
			</div>
		</div>
	);
}

export default Home;
