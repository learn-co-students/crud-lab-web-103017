import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  //console.log('restaurant props?', this.props)
  render() {
    const restaurants = this.props.store.getState().restaurants.map((restaurant, i) => {
      return <Restaurant restaurant={restaurant} key={i} store={this.props.store} />
    })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
