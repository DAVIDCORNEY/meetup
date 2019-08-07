import React, { Component } from "react";
import firebase from "../Firebase";
import FormMessage from "../FormMessage/FormMessage";
import { navigate } from "@reach/router";

class Login extends Component {
  render() {
    return (
      <form className="mt-3">
        <div className="container">
          <div className="row justify content-center">
            <div className="col-lg-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb3">Log in</h3>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </section>
                  <section className="form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="Password"
                    >
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                    />
                  </section>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
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
