import React from "react";

import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography
} from "@material-ui/core/";
import classesLogin from "./LoginPage.css";

import { userService } from "../../_services";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    userService.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });
    userService.login(username, password).then(
      user => {
        const { from } = this.props.location.state || {
          from: { pathname: "/" }
        };
        this.props.history.push(from);
      },
      error => this.setState({ error, loading: false })
    );
  }

  render() {
    const { username, password, submitted, loading, error } = this.state;
    return (
      <div className={classesLogin.loginOverlay}>
        <Card
          style={{ backgroundColor: "#ECEFF1" }}
          className={classesLogin.card}
        >
          <CardContent>
            <Typography className={classesLogin.header}>
              {" "}
              Zaloguj się{" "}
            </Typography>
            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  (classesLogin.input) + (submitted && !username ? " has-error" : "")
                }
              >
                <TextField
                  hintText="User name"
                  label="Username"
                  color="secondary"
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />

                {submitted && !username && (
                  <div className={classesLogin.error}>Username is required</div>
                )}
              </div>

              <div
                className={
                    (classesLogin.input) + (submitted && !password ? " has-error" : "")
                }
              >
                <TextField
                  label="Password"
                  floatingLabelText="Password"
                  type="password"
                  color="secondary"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />

                {submitted && !password && (
                  <div className={classesLogin.error}>Password is required</div>
                )}
              </div>
              <div className={classesLogin.button}>
                <Button
                  variant="contained"
                  disabled={loading}
                  color="secondary"
                  type="onSubmit"
                >
                  Login
                </Button>
              </div>
              {error && <div className={classesLogin.error}>{error}</div>}
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export { LoginPage };
