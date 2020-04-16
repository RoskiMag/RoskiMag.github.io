import React, { Component } from 'react'
import './DigitalMag.css';

export default class Mag009 extends Component {
  render() {
    return (
        <div className="issue9-container">
        <span className="issue-header">ISSUE NINE</span>
        <span className="issue-theme">Love in the Time of the Internet</span>
          <div className="issue9-container-center">
              <a href="https://drive.google.com/file/d/1NB1EDRkt-DRnSDgEmzA-nL8fCIkjvx6L/view">
              <img
                src={require('../assets/issue_9/issue9_cover.png')}
                className="cover"
                />
                </a>
                <div className="view-button">
                  <a href="https://drive.google.com/file/d/1NB1EDRkt-DRnSDgEmzA-nL8fCIkjvx6L/view">
                  CLICK TO ENTER</a>
                </div>
          </div>
        </div>
    )
  }
}
