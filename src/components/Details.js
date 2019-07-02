import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div className="details">
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}

export default Details;
