import React, { Component } from "react";

const btnStyles = {
  position: "relative",
};

const h2Styles = {
  border: "none",
  margin: "0px",
  width: "100%",
};

export class Button extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <button className={this.props.className} style={btnStyles}>
          <h2 style={h2Styles}>{this.props.text}</h2>
        </button>
      </a>
    );
  }
}

export default Button;
