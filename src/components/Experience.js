/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  renderData() {
    const renderedData = this.props.data.map(item => {
      return(
        <div
        className = 'rendered-data-container'
        key = {item.key}>
          <label>Company</label>
          <input
          value = {item.company}
          onChange = {evt => this.updateCompany(item.key, evt.target.value)}
          />
          <label>Job Title</label>
          <input
          value = {item.title}
          onChange = {evt => this.updateTitle(item.key, evt.target.value)}
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

  updateCompany(key, company) {
    const data = this.props.data.map(item => {
      if (item.key === key) {
        item.company = company;
      }
      return item;
    })
    this.props.update(data);
  }

  updateTitle(key, title) {
    const data = this.props.data.map(item => {
      if (item.key === key) {
        item.title = title;
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

  render() {
    return(
      <div
      className = 'input-section'
      >
        <h2>Experience</h2>
        <form
        onSubmit = {e => e.preventDefault()}
        >
          {this.renderData()}
          <button
          onClick = {this.props.add}>
            Add Employer
          </button>
        </form>
      </div>
    )
  }
}

export default Experience;