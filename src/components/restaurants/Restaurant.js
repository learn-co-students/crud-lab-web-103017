import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = () => {
    console.log('deleting', this.props.restaurant.id);
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}<button onClick={this.handleOnClick}>x</button></li>
        <ReviewInput
          store={this.props.store}
          restaurant={this.props.restaurant}
          restaurantId={this.props.restaurant.id}/>

      </div>
    );
  }
};

export default Restaurant;
