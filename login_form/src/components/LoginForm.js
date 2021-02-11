import React, { Component } from "react";
import "../css/login_form.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  _submit(event) {
    event.preventDefault();
    this.props.submit({
      username: this.username.current.value,
      password: this.password.current.value
    });
  }

  render() {
    return (
      <form className="login-form">
        <input
          type="text"
          ref={this.username}
          placeholder="Username"
          className="login-form__field"
        />
        <input
          type="password"
          ref={this.password}
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
