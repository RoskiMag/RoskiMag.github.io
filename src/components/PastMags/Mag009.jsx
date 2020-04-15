import React, { Component } from 'react'
import './DigitalMag.css';

export default class Mag009 extends Component {
  render() {
    return (
        <div className="issue9-container">
        <span className="issue-header">ISSUE NINE</span>
        <span className="issue-theme">Love in the Age of the Internet</span>
          <iframe
            className="mag-iframe"
            src="https://drive.google.com/file/d/11TUfuVdJChjEqRDlk3IEf0nqU9rxT_ia/preview"
            >
          </iframe>
        </div>
    )
  }
}
