import React, { Component } from "react";

class PersonalInfoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.data.firstName + ' ' + this.props.data.lastName}</h1>
        <ul>
          <li key = 'phone'>
            <p>Phone Number: {this.props.data.phoneNumber}</p>
          </li>
          <li key = 'email'>
            <p>Email: {this.props.data.email}</p>
          </li>
          <li key = 'website'>
            <p>Website: {this.props.data.website}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default PersonalInfoPreview;