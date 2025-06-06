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
        <Link to="/issue_19"><a className="mag">19</a></Link>
      </div>
        
         <div className="link-container">
        <Link to="/issue_17"><a className="mag">17</a></Link>
      </div>
       
        
      <div className="link-container">
        <Link to="/issue_16"><a className="mag">16</a></Link>
      </div>
        
      <div className="link-container">
        <Link to="/issue_15"><a className="mag">15</a></Link>
      </div>
      
      <div className="link-container">
        <Link to="/issue_14"><a className="mag">14</a></Link>
      </div>

     <div className="link-container">
        <Link to="/issue_13"><a className="mag">13</a></Link>
      </div>
      
      <div className="link-container">
        <Link to="/issue_12"><a className="mag">12</a></Link>
      </div>
      
      <div className="link-container">
        <Link to="/issue_11"><a className="mag">11</a></Link>
      </div>

      <div className="link-container">
        <Link to="/issue_10"><a className="mag">10</a></Link>
      </div>

      <div className="link-container">
        <Link to="/issue_9"><a className="mag">09</a></Link>
      </div>

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
