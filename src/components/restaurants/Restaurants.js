import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    console.log(this.props.store.getState().restaurants);
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant, i) => <Restaurant store={this.props.store} restaurant={restaurant} key={i} id={restaurant.id}/>)}
      </ul>
    );
  }
};

export default Restaurants;
