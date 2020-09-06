import React, { Component } from "react";
import StarsRating from "stars-rating";

export class Stars extends Component {
  render() {
    return (
      <div>
        <StarsRating
          count={5}
          size={24}
          color2={"#353535"}
          value={this.props.rating}
        />
      </div>
    );
  }
}

export default Stars;
