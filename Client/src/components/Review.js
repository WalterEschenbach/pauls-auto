import React, { Component } from "react";
import Stars from "./Stars";

const reviews = [
  {
    name: "Dustin Moore",
    stars: 5,
    text: "Paul knows his way around a vehicle! I highly recommend him",
  },
  {
    name: "Natalie Berdahl",
    stars: 5,
    text:
      "I'm taking my car to Paul from now on. So glad I found him. He's professional, genuine and honest. Prices are great, works fast and does fantastic work. Highly recommend!",
  },
  {
    name: "Jeremy",
    stars: 5,
    text:
      "He is the most honest mechanic in Columbus. He is fair and will tell you the truth about what is really wrong with your automobile. I was lucky enough to find him by word of mouth from a friend.",
  },
  {
    name: "Kyle Hood",
    stars: 5,
    text:
      "One of the best mechanics around! Honest and saved us a TON compared to other popular auto repair places in Worthington and Columbus! Has repaired several of our cars and my truck!",
  },
  {
    name: "Michael R. Laughlin",
    stars: 5,
    text: `Only place I will take my vehicles. Upmost honesty and respect for his customers. He's always quick and does things right. He came highly recommended, and never disappointed.`,
  },
  {
    name: "Mike Lechler",
    stars: 5,
    text: `Paul is a great guy. Very honest. It's nice to have a mechanic you can trust and have so many years of experience to rely on. I highly recommend his services.`,
  },
];

export class Review extends Component {
  render() {
    return (
      <React.Fragment>
        {reviews.map((review) => (
          <React.Fragment>
            <div className="review-top-row-container ">
              <div className="review-title">
                <h3>{review.name}</h3>
              </div>
              <div className="stars-container">
                <Stars rating={review.stars} />
              </div>
            </div>
            <p>{review.text}</p>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default Review;
