import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    console.log("REVIEW", this.props);
    console.log("REVIEW -- reviews", this.props.store.getState());
    const fellows = this.props.store
      .getState()
      .reviews.filter(r => r.restaurantId === this.props.restaurantId);
    console.log("FELLOWS", fellows);
    const reviews = fellows.map((review, index) => {
      return <Review store={this.props.store} key={index} review={review} />;
    });
    return (
      <div>
        <ul>{reviews}</ul>
      </div>
    );
  }
}

export default Reviews;
