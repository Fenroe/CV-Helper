import React, { Component } from "react";

class Education extends Component {
  constuctor(props) {
    super(props);
  }

  updateInstitution(institution) {
    const data = this.props.data;
    data.institution = institution;
    this.props.update(data);
  }

  updateSubject(subject) {
    const data = this.props.data;
    data.subject = subject;
    this.props.update(data);
  }

  updateStartDate(startDate) {
    const data = this.props.data;
    data.startDate = startDate;
    this.props.update(data);
  }

  updateEndDate(endDate) {
    const data = this.props.date;
    data.endDate = endDate;
    this.props.update(data);
  }

  updateDescription(description) {
    const data = this.props.data;
    data.description = description;
    this.props.update(data);
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