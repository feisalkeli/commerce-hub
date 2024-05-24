import React, { Component } from "react";
import withNavigation from "../utils/withNavigation";
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const users = await response.json();
      const user = users.find(
        (user) =>
          user.email === this.state.email &&
          user.password === this.state.password
      );

      if (user) {
        this.props.navigate("/dashboard");
      } else {
        alert("Input correct user credentials");
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4 border-bottom pb-2">Login</h4>
                <form onSubmit={this.handleLogin}>
                  {/* Email starts */}
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={this.state.email}
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />
                  </div>
                  {/* Email ends */}

                  {/* Password starts */}
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={this.state.password}
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                    />
                  </div>
                  {/* Password ends */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withNavigation(Login);
