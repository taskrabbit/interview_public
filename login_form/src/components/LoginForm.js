import React, { Component } from "react";
import "../css/login_form.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  _submit(event) {
    event.preventDefault();
    this.props.submit({
      username: this.props.username,
      password: this.props.password,
    });
  }

  render() {
    return (
      <form className="login-form" autocomplete="off">
        <input
          onChange={this.props.setUsername}
          value={this.props.username}
          type="text"
          placeholder="Username"
          className="login-form__field"
        />
        <input
          onChange={this.props.setPassword}
          value={this.props.password}
          type="password"
          placeholder="Password"
          className="login-form__field"
        />
        <button
          onClick={event => this._submit(event)}
          className="login-form__action"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
