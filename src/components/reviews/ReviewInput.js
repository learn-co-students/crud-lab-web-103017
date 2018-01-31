import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(){
    super()

    this.state = {
      text: ""
    }
  }

  handleSubmit = (event) => {
    console.log("in submit props", this.props.restaurantId)
    event.preventDefault()
    this.props.store.dispatch({type: "ADD_REVIEW", text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ""})
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <p>Reviews:</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <button type="submit">Submit</button>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
