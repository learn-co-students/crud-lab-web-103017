import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map(rest => <Restaurant store={this.props.store} restaurant={rest} restaurantId={rest.id}/>)}
      </ul>
    );
  }
};

export default Restaurants;
