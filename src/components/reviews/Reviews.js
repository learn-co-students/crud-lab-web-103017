import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log("in reviews ", this.props.store.getState().reviews.filter(rev => rev.restaurantId === this.props.restaurantId));
    let myReviews = this.props.store.getState().reviews.filter(rev => rev.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {myReviews.map(review => <li><Review review={review} store={this.props.store}/></li>)}
      </ul>
    );
  }
};

export default Reviews;
