import React, { Component } from "react";

class Education extends Component {
  constuctor(props) {
    super(props);
  }

  renderData() {
    const renderedData = this.props.data.map(item => {
      return(
        <div
        key = {item.key}
        >
          <label>Institution</label>
          <input
          defaultValue = {item.institution}
          />
          <label>Subject</label>
          <input 
          defaultValue = {item.subject}
          />
          <label>Start Date</label>
          <input
          defaultValue = {item.startDate}
          />
          <label>End Date</label>
          <input
          defaultValue = {item.endDate}
          />
          <label>Description</label>
          <input
          defaultValue = {item.description}
          />
        </div>
      )
    })
    return renderedData;
  }

  render() {
    return(
      <div>
        <h2>Education</h2>
        <form
        onSubmit = {e => e.preventDefault()}>

          <button
          onClick = {this.props.add}>
            Add Institution
          </button>
        </form>
      </div>
    )
  }
}

export default Education;