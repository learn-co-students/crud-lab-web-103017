import React, { Component } from "react";
import ReviewInput from "../reviews/ReviewInput";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    console.log("Restaurant", props);
  }

  handleDelete = e => {
    console.log("Delete", e);
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    });
  };

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleDelete} />
          <ReviewInput
            store={this.props.store}
            restaurantId={this.props.restaurant.id}
          />
        </li>
      </div>
    );
  }
}

export default Restaurant;
