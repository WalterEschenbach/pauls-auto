import React, { Component } from "react";
import About from "./About";
import Sidebar from "./Sidebar";

export class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <About />
        <Sidebar />
      </div>
    );
  }
}

export default Home;
