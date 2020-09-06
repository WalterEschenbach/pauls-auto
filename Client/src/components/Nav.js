import React, { Component } from "react";
import Logo from "./Logo";
import Links from "./Links";

export class Nav extends Component {
  render() {
    return (
      <nav className="nav-container">
        <Logo />

        <Links />
      </nav>
    );
  }
}

export default Nav;
