import React, { Component } from "react";

import UserService from "../services/user.service";

import pm1 from "../images/time.png"
import pm2 from "../images/documents.png"
import pm3 from "../images/staffing.png"
import pm4 from "../images/line.png"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      
        <div className="bgh">
          
          <div className="bgh1">
            <div className="titletext"><strong>Project Manager</strong></div>
          
            <img src={pm1} style={{
                  position: 'absolute',
                  top: 300,
                  left: 500, 
                }} width="130" height="130" alt="pm1" ></img>
                <img src={pm4} style={{
                  position: 'absolute',
                  top: 300,
                  left: 435, 
                }}width="50" height="130" alt="pm1"></img>
                <img src={pm2} style={{
                  position: 'absolute',
                  top: 300,
                  left: 300, 
                }}width="130" height="130" alt="pm1"></img>
                <img src={pm4} style={{
                  position: 'absolute',
                  top: 300,
                  left: 635, 
                }}width="50" height="130" alt="pm1"></img>
                <img src={pm3} style={{
                  position: 'absolute',
                  top: 300,
                  left: 700, 
                }} width="130" height="130" alt="pm1"></img>
                
            </div>
            </div>
      
    );
  }
}