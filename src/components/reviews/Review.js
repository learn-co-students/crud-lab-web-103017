import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = e => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }



  render() {
    //console.log('these are review props', this.props)
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleOnClick} />
      </li>
    );
  }
};

export default Review;
