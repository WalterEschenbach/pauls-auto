import React, { Component } from "react";
import Button from "./Button";

const mapLink = `https://www.google.com/maps/place/Paul's+Repair+Services/@40.1065419,-83.0020145,15z/data=!4m5!3m4!1s0x0:0x3a0fbfb182b66a9!8m2!3d40.1065419!4d-83.0020145`;

export class Mapbar extends Component {
  render() {
    return (
      <div className="mapbar">
        <br />
        <br />
        <h3>6969 Worthington Galena Rd # N, Worthington, OH 43085</h3>
        <br />
        <br />
        <br />
        <Button text="Google Maps" className="btn" link={mapLink} />
      </div>
    );
  }
}

export default Mapbar;
