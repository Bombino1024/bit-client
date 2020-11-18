import React, { Component } from "react";
import LoginPage from "../../UI/pages/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <LoginPage parent={this} />;
  }
}

export default Login;
