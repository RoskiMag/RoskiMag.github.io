import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/PrevNextBlog.css';

import leftArrow from './assets/arrow_left.png';
import rightArrow from './assets/arrow_right.png';

export default class PrevNextBlog extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
      <div className="prev-next-container">
        <div className="pn-content">
          <img src={leftArrow} alt="previous-post" className="arrow-image" />
          <div className="pn-text">
            Title of previous post
          </div>
          <img src={rightArrow} alt="previous-post" className="arrow-image" />
          <div className="pn-text">
            Title of next post
          </div>
        </div>
      </div>
    )
  }
}
