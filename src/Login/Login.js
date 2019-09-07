import React, { Component } from "react";
import firebase from "../Firebase";
import FormMessage from "../FormMessage/FormMessage";
import { navigate } from "@reach/router";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleUserInput = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({ [inputName]: inputValue });
  };

  handleSubmit = event => {
    let regInfo = {
      email: this.state.email,
      password: this.state.password
    };
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(regInfo.email, regInfo.password)
      .then(() => {
        navigate("./meetings");
      })
      .catch(error => {
        if (error.message !== null) {
          this.setState({ errorMessage: error.message });
        } else {
          this.setState({ errorMessage: null });
        }
      });
  };

  render() {
    const message = this.state.errorMessage;
    return (
      <form className="mt-3" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row justify content-center">
            <div className="col-lg-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb3">Log in</h3>
                  <section className="form-group">
                    {this.state.errorMessage !== null ? (
                      <FormMessage message={message} />
                    ) : null}
                    <label
                      className="form-control-label sr-only"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      required
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleUserInput}
                    />
                  </section>
                  <section className="form-group">
                    <input
                      required
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleUserInput}
                    />
                  </section>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-info" type="submit">
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
