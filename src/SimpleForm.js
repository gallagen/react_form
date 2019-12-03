import React from "react";
import Greetings from "./Greetings";
import style from "./style";

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: ""
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "The name must contain at least three letters. Numbers and special characters are not allowed."
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;
    const firstNameError = this.validateName(firstName);
    return this.setState({ firstNameError });
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  onLastNameBlur = () => {
    const { lastName } = this.state;
    const lastNameError = this.validateName(lastName);
    return this.setState({ lastNameError });
  };

  onLastNameChange = event =>
    this.setState({
      lastName: event.target.value
    });

  render() {
    const { firstNameError, firstName, lastName, lastNameError } = this.state;

    return (
      <div style={style.form}>
        <div style={style.inputGroup}>
          <label>
            First name:
            <input
              style={style.input}
              type="text"
              name="firstName"
              onChange={this.onFirstNameChange}
              onBlur={this.onFirstNameBlur}
            />
            {firstNameError && <div style={style.error}>{firstNameError}</div>}
          </label>
        </div>

        <div style={style.inputGroup}>
          <label>
            Last name:
            <input
              style={style.input}
              type="text"
              name="lastName"
              onChange={this.onLastNameChange}
              onBlur={this.onLastNameBlur}
            />
            {lastNameError && <div style={style.error}>{lastNameError}</div>}
          </label>
        </div>

        <Greetings firstName={firstName} lastName={lastName} />
      </div>
    );
  }
}

export default SimpleForm;

