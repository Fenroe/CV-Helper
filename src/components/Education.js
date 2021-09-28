/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  updateInstitution(key, institution) {
    const data = this.props.data.map(item => {
      if (item.key === key) {
        item.institution = institution;
      }
      return item;
    })
    this.props.update(data);
  }

  updateSubject(key, subject) {
    const data = this.props.data.map(item => {
      if (item.key === key) {
        item.subject = subject;
      }
      return item;
    })
    this.props.update(data);
  }

  updateStartDate(key, startDate) {
    const data = this.props.data.map(item => {
      if (item.key === key) {
        item.startDate = startDate;
      }
      return item;
    })
    this.props.update(data);
  }

  updateEndDate(key, endDate) {
    const data = this.props.data.map(item => {
      if (item.key === key) {
        item.endDate = endDate;
      }
      return item;
    })
    this.props.update(data);
  }

  updateDescription(key, description) {
    const data = this.props.data.map(item => {
      if (item.key === key) {
        item.description = description;
      }
      return item;
    })
    this.props.update(data);
  }

  renderData() {
    const renderedData = this.props.data.map(item => {
      return(
        <div
        className = 'rendered-data-container'
        key = {item.key}
        >
          <label>Institution</label>
          <input
          value = {item.institution}
          onChange = {evt => this.updateInstitution(item.key, evt.target.value)}
          />
          <label>Subject</label>
          <input 
          value = {item.subject}
          onChange = {evt => this.updateSubject(item.key, evt.target.value)}
          />
          <label>Start Year</label>
          <input
          value = {item.startDate}
          onChange = {evt => this.updateStartDate(item.key, evt.target.value)}
          />
          <label>End Year</label>
          <input
          value = {item.endDate}
          onChange = {evt => this.updateEndDate(item.key, evt.target.value)}
          />
          <label>Description</label>
          <input
          value = {item.description}
          onChange = {evt => this.updateDescription(item.key, evt.target.value)}
          />
        </div>
      )
    })
    return renderedData;
  }

  render() {
    return(
      <div
      className = 'input-section'
      >
        <h2>Education</h2>
        <form
        onSubmit = {e => e.preventDefault()}>
          {this.renderData()}
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