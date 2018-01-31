import React, { Component } from 'react';

class Review extends Component {

  delete = (event) => {
    this.props.store.dispatch({type: "DELETE_REVIEW", id: this.props.review.id })
  }
  render() {
    return (
      <div>
       <p>{this.props.review.text}</p>
       <button onClick ={this.delete}>Delete</button>
      </div>
    );
  }
};

export default Review;
