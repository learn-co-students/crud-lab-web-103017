import React, { Component } from "react";

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    console.log("RestaurantInput", props);
    this.state = {
      text: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: {
        text: this.state.text
      }
    });
    this.setState({
      text: ""
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
