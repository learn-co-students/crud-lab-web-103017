import React, { Component } from 'react';


class RestaurantInput extends Component {

  constructor(){
    super()

    this.state = {
      text: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: "ADD_RESTAURANT", text: this.state.text})
    this.setState({text: ""})
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
