import React, { Component } from "react";
import Carousel from "./Carousel";
import ReviewList from "./ReviewList";

export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Carousel />
        <br />
        <h2>Reviews</h2>
        <ReviewList />
      </div>
    );
  }
}

export default Sidebar;
