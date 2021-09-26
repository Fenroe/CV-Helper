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

    this.toggleSection = this.toggleSection.bind(this);
    this.assignClassNames = this.assignClassNames.bind(this);
    this.finishedSection = this.finishedSection.bind(this);
  }

  sections = [
    {
      sectionName: 'Personal Info',
      key: 0,
      isVisible: true,
      className: 'input-section',
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

  toggleSection(key) {
    const sections = this.sections.map(section => {
      if (section.key === key) {
        section.isVisible = !section.isVisible;
        console.log(section.isVisible);
      }
      return section;
    })
    this.sections = sections;
    this.assignClassNames();
  }

  assignClassNames() {
    const sections = this.sections.map(section => {
      if (section.isVisible) {
        section.className = 'input-section';
      } else {
        section.className = 'hidden-section';
      }
      return section;
    })
    this.sections = sections;
  }

  finishedSection(key) {
    const sections = this.sections.map(section => {
      if (section.key === key + 1) {
        section.isVisible = true;
      } else {
        section.isVisible = false;
      }
      return section;
    })
    this.sections = sections;
    this.assignClassNames();
  }

  render() {
    return(
      <div>
        <PersonalInfo
        personalInfo ={this.props.personalInfo}
        updatePersonalInfo = {this.props.updatePersonalInfo}
        ></PersonalInfo>
        <Statement
        statement = {this.props.statement}
        updateStatement = {this.props.updateStatement}
        ></Statement>
        <Skills
        skills = {this.props.skills}
        updateSkills = {this.props.updateSkills}
        ></Skills>
        <Experience
        experience = {this.props.experience}
        updateExperience = {this.props.updateExperience}
        ></Experience>
        <Education
        education = {this.props.education}
        updateEducation = {this.props.updateEducation}
        ></Education>
      </div>
    )
  }
}

export default Input;