import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      restaurantId: this.props.restaurantId,
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId,
      },
    });
    this.setState({
      text: '',
    })
  }


  render() {
    console.log('Review Input Props', this.props);
    console.log('Review Input State', this.state);
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Leave a Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}></input>
          <input type="submit"></input>
        </form>
        <Reviews
          restaurant={this.props.restaurant}
          store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
