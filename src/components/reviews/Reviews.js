import React, { Component } from 'react';
import Review from './Review';



class Reviews extends Component {
  render() {

    let id = 0

    let filteredReviews = this.props.store.getState().reviews.filter( (review, index) => {
      return review.restaurantId === this.props.restaurant.id
    })

    let reviews = filteredReviews.map((review, index) => {
      id ++
      return <Review review={review} key={index} id={id} restaurant={this.props.restaurant} store={this.props.store} />
    })



    // if (this.props.reviews) {
    //   reviews = this.props.restaurant.reviews.map(
    //     (review, index) => {
    //       return <Review review={review} key={index} restaurantId={review.restaurantId} store={this.props.store} />
    //     })
    // }

    // console.log('Reviews', this.props.store.getState().reviews);
    console.log('Reviews', reviews);

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
