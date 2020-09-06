import React, { Component } from "react";
import Review from "./Review";

export class ReviewList extends Component {
  render() {
    return (
      <div className="review-list">
        <Review />
      </div>
    );
  }
}

export default ReviewList;
