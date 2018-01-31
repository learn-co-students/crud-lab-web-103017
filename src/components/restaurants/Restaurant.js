import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'
import Reviews from '../reviews/Reviews'

class Restaurant extends Component {

  render() {
  
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={() => this.props.store.dispatch({type: "DELETE_RESTAURANT", id: this.props.restaurant.id})}>Delete</button>
        <ReviewInput store={this.props.store} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id}/>

      </div>
    );
  }
};

export default Restaurant;
