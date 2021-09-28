// App stores all inputs from other modules in its state and passes down functions for them to use
// PersonalInfo is an object of first name, last name, address, phone number, email and website 
// PersonalInfo module to create a copy of its object and a function to push its copy to app state
// Statement is a string 
// Statement module needs a function to update string
// Skills is an array of strings
// Skills module needs to create a copy of this array and a function to push its copy to app state
// Experience is an array of objects with the properties of company name, job title, start date, end date and description
// Experience module needs functions to add and remove objects and update each property of each object
// Education is an array of objects with the properties of institution name, subject, start date, end date and description
// Education module needs functions to add and remove objects and update each propety of each object
// Each of the aforementioned modules will have state passed down to them for reading and writing purposes
// Preview will have state passed down to it only for display pruposes 

import React, { Component } from "react";
import Input from "./components/Input";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      key: 1,
      personalInfo: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        website: '',
      },
      statement: '',
      skills: [
        {
          key: 0,
          text: '',
        },
      ],
      experience: [
        {
          key: 0,
          company: '',
          title: '',
          startDate: '',
          endDate: '',
          description: '',
        }
      ],
      education: [
        {
          key: 0,
          institution: '',
          subject: '',
          startDate: '',
          endDate: '',
          description: '',
        }
      ],
    }

    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.updateStatement = this.updateStatement.bind(this);
    this.updateSkills = this.updateSkills.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  updateKey() {
    const key = this.state.key;
    this.setState({
      key: key +1,
    })
    return key;
  }

  updatePersonalInfo(personalInfo) {
    this.setState({
      personalInfo: personalInfo,
    })
  }

  updateStatement(statement) {
    this.setState({
      statement: statement,
    })
  }

  updateSkills(skills) {
    this.setState({
      skills: skills,
    })
  }

  addSkill() {
    const key = this.updateKey();
    const item = { key: key, text: '' };
    const skills = this.state.skills.concat([item]);
    this.updateSkills(skills);
  }

  updateExperience(experience) {
    this.setState({
      experience: experience,
    })
  }

  addExperience() {
    const key = this.updateKey();
    const item = { key: key, company: '', title: '', startDate: '', endDate: '', description: '' };
    const experience = this.state.experience.concat([item]);
    this.updateExperience(experience);
  }

  updateEducation(education) {
    this.setState({
      education: education,
    })
  }

  addEducation() {
    const key = this.updateKey();
    const item = { key: key, institution: '', subject: '', startDate: '', endDate: '', description: '' };
    const education = this.state.education.concat([item]);
    this.updateEducation(education);
  }

  render() {

    return(
      <div
      className = 'app-view'
      >
        <Input
        personalInfo = {this.state.personalInfo}
        updatePersonalInfo = {this.updatePersonalInfo}
        statement = {this.state.statement}
        updateStatement = {this.updateStatement}
        skills = {this.state.skills}
        updateSkills = {this.updateSkills}
        addSkill = {this.addSkill}
        experience = {this.state.experience}
        updateExperience = {this.updateExperience}
        addExperience = {this.addExperience}
        education = {this.state.education}
        updateEducation = {this.updateEducation}
        addEducation = {this.addEducation}
        ></Input>
        <Preview
        personalInfo = {this.state.personalInfo}
        statement = {this.state.statement}
        skills = {this.state.skills}
        experience = {this.state.experience}
        education = {this.state.education}
        >
        </Preview>
      </div>
    )
  }
}

export default App;
