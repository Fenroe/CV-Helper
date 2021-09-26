import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  personalInfo = this.props.personalInfo;

  update(evt, prop) {
    prop = evt.target.value;
    this.props.updatePersonalInfo(this.personalInfo);
    this.personalInfo = this.props.personalInfo;
  }

  render() {
    return(
      <form onSubmit = {e => e.preventDefault()}>
        <label>First Name</label>
        <input 
        defaultValue = {this.personalInfo.firstName}
        onChange = {evt => this.update(evt, this.personalInfo.firstName)}/>
        <label>Last Name</label>
        <input 
        defaultValue = {this.personalInfo.lastName}
        onChange = {evt => this.update(evt, this.personalInfo.lastName)}/>
        <label>Date of Birth</label>
        <input 
        defaultValue = {this.personalInfo.dob}
        onChange = {evt => this.update(evt, this.personalInfo.dob)}/>
        <label>Phone Number</label>
        <input 
        defaultValue = {this.personalInfo.phoneNumber}
        onChange = {evt => this.update(evt, this.personalInfo.phoneNumber)}/>
        <label>Email Address</label>
        <input 
        defaultValue = {this.personalInfo.email}
        onChange = {evt => this.update(evt, this.personalInfo.email)}/>
        <label>Website</label>
        <input 
        defaultValue = {this.personalInfo.website}
        onChange = {evt => this.update(evt, this.personalInfo.website)}/>
        <button
        onSubmit = {() => this.props.updatePersonalInfo(this.personalInfo)}>Done</button>
      </form>
    )
  }
}

export default PersonalInfo;
