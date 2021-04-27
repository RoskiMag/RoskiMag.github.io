import React, { Component } from 'react'
import './DigitalMag.css';

export default class Mag011 extends Component {
  render() {
    return (
        <div className="issue9-container">
        <span className="issue-header">ISSUE 11</span>
        <span className="issue-theme">metamorphosis</span>
          <div className="issue9-container-center">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1RJ33ZGiRCV544O9tyX0_RGutdXnm5ISV/view?usp=sharing">
              <img
                src={require('../assets/issue_11/issue_11_cover.png')}
                className="cover"
                />
                </a>
                <div className="view-button">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1RJ33ZGiRCV544O9tyX0_RGutdXnm5ISV/view?usp=sharing">
                  VIEW ISSUE 11</a>
                </div>
          </div>
        </div>
    )
  }
}
