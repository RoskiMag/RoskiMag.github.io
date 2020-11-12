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
                href="https://drive.google.com/file/d/1N8_FwAi7CrG2UIyyQPhRr5FFp39ftD4x/view?usp=sharing">
              <img
                src={require('../assets/issue_10/issue_10_cover.png')}
                className="cover"
                />
                </a>
                <div className="view-button">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1N8_FwAi7CrG2UIyyQPhRr5FFp39ftD4x/view?usp=sharing">
                  VIEW ISSUE X</a>
                </div>
          </div>
        </div>
    )
  }
}
