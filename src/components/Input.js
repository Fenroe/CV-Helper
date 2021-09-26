/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Statement from "./Statement";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  sections = [
    {
      sectionName: 'Personal Info',
      key: 0,
      isVisible: false,
      className: 'hidden-section',
    },
    {
      sectionName: 'Statement',
      key: 1,
      isVisible: false,
      className: 'hidden-section',
    },
    {
      sectionName: 'Skills',
      key: 2,
      isVisible: false,
      className: 'hidden-section',
    },
    {
      sectionName: 'Experience',
      key: 3,
      isVisible: false,
      className: 'hidden-section',
    },
    {
      sectionName: 'Education',
      key: 4,
      isVisible: false,
      className: 'hidden-section',
    },
  ]

  render() {
    return(
      <div>
        <h2>Personal Info</h2>
        <PersonalInfo
        personalInfo ={this.props.personalInfo}
        updatePersonalInfo = {this.props.updatePersonalInfo}></PersonalInfo>
        <h2>Statement</h2>
        <Statement
        statement = {this.props.statement}
        updateStatement = {this.props.updateStatement}></Statement>
        <h2>Skills</h2>
        <Skills
        skills = {this.props.skills}
        updateSkills = {this.props.updateSkills}></Skills>
        <h2>Experience</h2>
        <Experience
        experience = {this.props.experience}
        updateExperience = {this.props.updateExperience}></Experience>
        <h2>Education</h2>
        <Education
        education = {this.props.education}
        updateEducation = {this.props.updateEducation}></Education>
      </div>
    )
  }
}

export default Input;