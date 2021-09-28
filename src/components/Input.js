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

  render() {
    return(
      <div
      className = 'input-view'>
        <PersonalInfo
        data ={this.props.personalInfo}
        update = {this.props.updatePersonalInfo}
        ></PersonalInfo>
        <Statement
        data = {this.props.statement}
        update = {this.props.updateStatement}
        ></Statement>
        <Skills
        data = {this.props.skills}
        add = {this.props.addSkill}
        update = {this.props.updateSkills}
        ></Skills>
        <Experience
        data = {this.props.experience}
        add = {this.props.addExperience}
        update = {this.props.updateExperience}
        ></Experience>
        <Education
        data = {this.props.education}
        add = {this.props.addEducation}
        update = {this.props.updateEducation}
        ></Education>
      </div>
    )
  }
}

export default Input;