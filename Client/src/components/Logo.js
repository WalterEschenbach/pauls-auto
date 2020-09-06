import React, { Component } from "react";

export class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={require("../img/logo.png")} alt="logo" />
        <h1>Paul's Auto Repair Services</h1>
      </div>
    );
  }
}

export default Logo;
