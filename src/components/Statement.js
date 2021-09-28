/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Statement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
      className = 'input-section'
      >
        <h2>Statement</h2>
        <form>
          <label>Personal Statement</label>
          <textarea
          className = 'input-text-box' 
          value = {this.props.data}
          onChange = {evt => this.props.update(evt.target.value)} />
        </form>
      </div>
    )
  }
}

export default Statement;