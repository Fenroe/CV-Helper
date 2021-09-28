/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  renderData() {
    const renderedData = this.props.data.map(item => {
      return (
        <div
        key = {item.key}>
          <label>Skill {this.props.data.indexOf(item)+1}</label>
          <input 
          defaultValue = {item.text}
          onChange = {evt => this.editData(item.key, evt.target.value)}
          />
        </div>
      )
    })
    return renderedData;
  }

  editData(key, text) {
    const data = this.props.data.map(item => {
      if (key === item.key) {
        item.text = text;
      }
      return item;
    })
    this.props.update(data);
  }

  render() {
    return(
      <div
      className = 'input-section'
      >
        <h2>Skills</h2>
        <form
        onSubmit = {e => e.preventDefault()}
        >
          {this.renderData()}
          <button
          onClick = {this.props.add}
          >Add Skill</button>
        </form>
      </div>
    )
  }
}

export default Skills;