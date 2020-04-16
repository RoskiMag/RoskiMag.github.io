import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/Archive.css';

export default class Archive extends Component {
  mouseOverLink() {
    document.getElementById("root").style.background = "blue";
  }

  mouseOutLink() {
    document.getElementById("root").style.background = "";
  }

  render() {
    return (
      <div className="mag-container">

        <div className="link-container">
          <Link to="/archive/008"><a className="mag">08</a></Link>
        </div>

        <div className="link-container">
        <Link to="/archive/007"><a className="mag">07</a></Link>
        </div>

        <div className="link-container">
        <Link to="/archive/006"><a className="mag">06</a></Link>
        </div>

        <div className="link-container">
        <Link to="/archive/005"><a className="mag">05</a></Link>
        </div>

        <div className="link-container">
        <Link to="/archive/003"><a className="mag">03</a></Link>
        </div>

        <div className="link-container">
        <Link to="/archive/002"><a className="mag">02</a></Link>
        </div>

        <div className="link-container">
        <Link to="/archive/001"><a className="mag">01</a></Link>
        </div>
      </div>
    )
  }
}
