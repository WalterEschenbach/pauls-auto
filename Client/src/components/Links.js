import React, { Component } from "react";

export class Links extends Component {
  render() {
    return (
      <div className="links-container">
        <a href="/" className="link">
          <h2>Home</h2>
        </a>
        <a href="/contact" className="link">
          <h2>Contact</h2>
        </a>
        <a href="/location" className="link">
          <h2>Location</h2>
        </a>
      </div>
    );
  }
}

export default Links;
