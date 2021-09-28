/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  renderName() {
    return this.props.personalInfo.firstName + ' ' + this.props.personalInfo.lastName
  }

  renderContactInfo() {
    return(
      <div>
        <span>{this.props.personalInfo.phoneNumber}</span>
        <span>{this.props.personalInfo.email}</span>
        <span>{this.props.personalInfo.website}</span>
      </div>
    )
  }

  renderStatement() {
    return(
      <div>
        {this.props.statement}
      </div>
    )
  }

  render() {
    return(
      <div>
        <h1>{this.renderName()}</h1>
        
      </div>
    )
  }
}

export default Preview;