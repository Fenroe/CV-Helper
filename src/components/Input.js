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
        <h2
        onClick = {() => this.toggleSection(0)}
        >Personal Info</h2>
        <PersonalInfo
        className = {this.sections[0].className}
        key = {0}
        personalInfo ={this.props.personalInfo}
        updatePersonalInfo = {this.props.updatePersonalInfo}
        finished = {this.finishedSection}
        ></PersonalInfo>
        <h2
        onClick = {() => this.toggleSection(1)}
        >Statement</h2>
        <Statement
        className = {this.sections[1].className}
        key = {1}
        statement = {this.props.statement}
        updateStatement = {this.props.updateStatement}
        finished = {this.finishedSection}
        ></Statement>
        <h2
        onClick = {() => this.toggleSection(2)}
        >Skills</h2>
        <Skills
        className = {this.sections[2].className}
        key = {2}
        skills = {this.props.skills}
        updateSkills = {this.props.updateSkills}
        finished = {this.finishedSection}
        ></Skills>
        <h2
        onClick = {() => this.toggleSection(3)}
        >Experience</h2>
        <Experience
        className = {this.sections[3].className}
        key = {3}
        experience = {this.props.experience}
        updateExperience = {this.props.updateExperience}
        finished = {this.finishedSection}
        ></Experience>
        <h2
        onClick = {() => this.toggleSection(4)}
        >Education</h2>
        <Education
        className = {this.sections[4].className}
        key = {4}
        education = {this.props.education}
        updateEducation = {this.props.updateEducation}
        finished = {this.finishedSection}
        ></Education>
      </div>
    )
  }
}

export default Input;