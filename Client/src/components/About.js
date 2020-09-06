import React, { Component } from "react";
import Button from "./Button";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <br />
        <h2>Services We Offer</h2>
        <h4>Lorem ipsum dolor sit</h4>
        <br />
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis morbi
          purus egestas mauris aliquam in sit pretium tempor. Posuere eget sit
          feugiat quis adipiscing pellentesque egestas. Lacinia posuere etiam
          nibh pellentesque odio volutpat laoreet blandit. Nec, odio ipsum,
          porta urna. Urna ut pharetra, habitant velit dictum. Ultrices
          fringilla pretium, enim, mi hendrerit congue quam sodales neque.
          Fermentum sit urna adipiscing amet egestas lacus. Tristique morbi eu
          duis adipiscing sit turpis tellus. Felis fermentum habitasse neque
          leo. Aliquet mauris euismod pulvinar iaculis cursus at eu. Tristique
          fermentum sed nunc vitae venenatis facilisis pharetra laoreet. Turpis
          interdum eu faucibus neque ultrices amet non, leo egestas. Neque
          sagittis eget in in euismod dignissim nisl. In donec in et eget sed
          pharetra, malesuada. Pretium, sit tortor nunc ac. Consequat nulla
          tempor a a, et et. Nulla iaculis eu etiam mi.
        </h3>
        <br />
        <Button text="Contact" className="btn contact-btn" link="/contact" />
      </div>
    );
  }
}

export default About;
