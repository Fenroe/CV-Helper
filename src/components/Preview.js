/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import PersonalInfoPreview from "./PersonalInfoPreview";
import StatementPreview from "./StatementPreview";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <PersonalInfoPreview
        data = {this.props.personalInfo}
        ></PersonalInfoPreview>
        <StatementPreview
        data = {this.props.statement}
        ></StatementPreview>
      </div>
    )
  }
}

export default Preview;