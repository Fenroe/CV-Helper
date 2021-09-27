/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Statement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>Statement</h2>
        <form>
          <label>Personal Statement</label>
          <input
          type = 'text' 
          defaultValue = {this.props.data}
          onChange = {evt => this.props.update(evt.target.value)} />
        </form>
      </div>
    )
  }
}

export default Statement;