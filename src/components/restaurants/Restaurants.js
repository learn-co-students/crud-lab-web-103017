import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    let restaurants

    if (this.props.store.getState().restaurants) {
      restaurants = this.props.store.getState().restaurants.map( (restaurant, index) => {
        return <Restaurant restaurant={ restaurant } key={ index } store={this.props.store}/>
      })

    }


    // console.log('Restaurants', restaurants);
    return(
      <ul>
        { restaurants }
      </ul>
    );
  }
};

export default Restaurants;
