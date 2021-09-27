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
        key = {item.key}>
          <label>Company</label>
          <input
          defaultValue = {item.company}
          onChange = {evt => this.updateCompany(evt.target.value)}
          />
          <label>Job Title</label>
          <input
          defaultValue = {item.title}
          onChange = {evt => this.updateTitle(evt.target.value)}
          />
          <label>Start Date</label>
          <input
          defaultValue = {item.startDate}
          onChange = {evt => this.updateStartDate(evt.target.value)}
          />
          <label>End Date</label>
          <input
          defaultValue = {item.endDate}
          onChange = {evt => this.updateEndDate(evt.target.value)}
          />
          <label>Description</label>
          <input
          defaultValue = {item.description}
          onChange = {evt => this.updateDescription(evt.target.value)}
          />
        </div>
      )
    })
    return renderedData;
  }

  updateCompany(company) {
    const data = this.props.data;
    data.company = company;
    this.props.update(data);
  }

  updateTitle(title) {
    const data = this.props.data;
    data.title = title;
    this.props.update(data);
  }

  updateStartDate(startDate) {
    const data = this.props.data;
    data.startDate = startDate;
    this.props.update(data);
  }

  updateEndDate(endDate) {
    const data = this.props.data;
    data.endDate = endDate;
    this.props.update(data);
  }

  updateDescription(description) {
    const data = this.props.data;
    data.description = description;
    this.props.update(data);
  }

  render() {
    return(
      <div>
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