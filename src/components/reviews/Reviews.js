import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewsOfRest = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    console.log('reviewsOfRest is:', reviewsOfRest)
    const reviews = reviewsOfRest.map((review, i) => {
      return <Review review={review} key={i} store={this.props.store} />
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
