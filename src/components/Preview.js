/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import PersonalInfoPreview from "./PersonalInfoPreview";

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
      </div>
    )
  }
}

export default Preview;