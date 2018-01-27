import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const resReviews = this.props.store.getState().reviews.filter(rev => {
      return rev.restaurantId === this.props.restaurantId
    })

    return (
      <ul>
        {resReviews.map(resReview => <Review review={resReview} store={this.props.store} />)}
      </ul>
    );
  }
};

export default Reviews;
