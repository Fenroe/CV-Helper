/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class StatementPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Personal Profile</h2>
        <p>{this.props.data}</p>
      </div>
    )
  }
}

export default StatementPreview;
