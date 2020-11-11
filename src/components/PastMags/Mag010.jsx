import React, { Component } from 'react'
import './DigitalMag.css';

export default class Mag010 extends Component {
  render() {
    return (
        <div className="issue9-container">
        <span className="issue-header">ISSUE X</span>
        <span className="issue-theme">the digital issue</span>
          <div className="issue9-container-center">
              <a
                target="_blank"
                href="https://www.roskimag.com/#/">
              <img
                src={require('../assets/issue_10/issue_10_cover.png')}
                className="cover"
                />
                </a>
                <div className="view-button">
                  <a
                    target="_blank"
                    href="https://www.roskimag.com/#/">
                  CLICK TO ENTER</a>
                </div>
          </div>
        </div>
    )
  }
}
