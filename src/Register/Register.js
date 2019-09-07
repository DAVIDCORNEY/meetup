import React, { Component } from "react";
import FormMessage from "../FormMessage/FormMessage";
import firebase from "../Firebase";

class Register extends Component {
  state = {
    displayName: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    errorMessage: null
  };

  handleUserInput = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState(
      {
        [inputName]: inputValue
      },
      () => {
        if (this.state.passwordOne !== this.state.passwordTwo) {
          this.setState({ errorMessage: "Passwords do not match" });
        } else {
          this.setState({ errorMessage: null });
        }
      }
    );
  };

  handleSubmit = event => {
    let regInfo = {
      displayName: this.state.displayName,
      email: this.state.email,
      password: this.state.passwordOne
    };
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(regInfo.email, regInfo.password)
      .then(() => {
        this.props.registerUser(regInfo.displayName);
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
            <div className="col-lg-8">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb3">Register</h3>
                  <div className="form-row">
                    {this.state.errorMessage !== null ? (
                      <FormMessage message={message} />
                    ) : null}
                    <section className="col-sm-12 form-group">
                      <label
                        className="form-control-label sr-only"
                        htmlFor="displayName"
                      >
                        Display Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="displayName"
                        placeholder="Name"
                        name="displayName"
                        required
                        value={this.state.name}
                        onChange={this.handleUserInput}
                      />
                    </section>
                  </div>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.handleUserInput}
                    />
                  </section>
                  <div className="form-row">
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="passwordOne"
                        value={this.state.passwordOne}
                        onChange={this.handleUserInput}
                      />
                    </section>
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Repeat Password"
                        name="passwordTwo"
                        value={this.state.passwordTwo}
                        onChange={this.handleUserInput}
                      />
                    </section>
                  </div>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-info" type="submit">
                      Register
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

export default Register;
