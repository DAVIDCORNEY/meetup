import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <form className="mt-3">
        <div className="container">
          <div className="row justify content-center">
            <div className="col-lg-8">
              <div className="card bg-light">
                <div className="card-body">
                  <h3 className="font-weight-light mb3">Register</h3>
                  <div className="form-row">
                    <section className="col-sm-12 form-group">
                      <label
                        className="form-control-label sr-only"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="name"
                        required
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
                    />
                  </section>
                  <div className="form-row">
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="passwordOne"
                      />
                    </section>
                    <section className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Repeat Password"
                        name="passwordTwo"
                      />
                    </section>
                  </div>
                  <div className="form-group text-right mb-0">
                    <button className="btn btn-primary" type="submit">
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
