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

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        dob: '',
        phoneNumber: '',
        email: '',
        website: '',
      },
      statement: '',
      skills: [],
      experience: [],
      education: [],
    }

    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.updateStatement = this.updateStatement.bind(this);
    this.updateSkills = this.updateSkills.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
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

  updateExperience(experience) {
    this.setState({
      experience: experience,
    })
  }

  updateEducation(education) {
    this.setState({
      education: education,
    })
  }

  render() {

    return(
      <div>
        <Input
        personalInfo = {this.state.personalInfo}
        updatePersonalInfo = {this.updatePersonalInfo}
        statement = {this.state.statement}
        updateStatement = {this.updateStatement}
        skills = {this.state.skills}
        updateSkills = {this.updateSkills}
        experience = {this.state.experience}
        updateExperience = {this.updateExperience}
        education = {this.state.education}
        updateEducation = {this.updateEducation}
        ></Input>
      </div>
    )
  }
}

export default App;
