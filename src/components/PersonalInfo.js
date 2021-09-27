/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  updateFirstName(evt) {
    const personalInfo = this.props.data;
    personalInfo.firstName = evt.target.value;
    this.props.update(personalInfo);
  }

  updateLastName(evt) {
    const personalInfo = this.props.data;
    personalInfo.lastName = evt.target.value;
    this.props.update(personalInfo);
  }

  updatePhoneNumber(evt) {
    const personalInfo = this.props.data;
    personalInfo.phoneNumber = evt.target.value;
    this.props.update(personalInfo);
  }

  updateEmail(evt) {
    const personalInfo = this.props.data;
    personalInfo.email = evt.target.value;
    this.props.update(personalInfo);
  }

  updateWebsite(evt) {
    const personalInfo = this.props.data;
    personalInfo.website = evt.target.value;
    this.props.update(personalInfo);
  }

  render() {
    return(
      <div>
        <h2>Personal Info</h2>
        <form 
        onSubmit = {e => e.preventDefault()}>
          <label>First Name</label>
          <input 
          defaultValue = {this.props.data.firstName}
          onChange = {evt => this.updateFirstName(evt)}/>
          <label>Last Name</label>
          <input 
          defaultValue = {this.props.data.lastName}
          onChange = {evt => this.updateLastName(evt)}/>
          <label>Phone Number</label>
          <input 
          type = 'tel'
          defaultValue = {this.props.data.phoneNumber}
          onChange = {evt => this.updatePhoneNumber(evt)}/>
          <label>Email Address</label>
          <input 
          type = 'email'
          defaultValue = {this.props.data.email}
          onChange = {evt => this.updateEmail(evt)}/>
          <label>Website</label>
          <input 
          type = 'url'
          defaultValue = {this.props.data.website}
          onChange = {evt => this.updateWebsite(evt)}/>
        </form>
      </div>
    )
  }
}

export default PersonalInfo;
