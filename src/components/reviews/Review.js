import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    console.log('Review Restaurant', this.props.restaurant);
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleOnClick}>Delete</button>
      </li>
    );
  }
};

export default Review;
