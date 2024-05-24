import React, { Component } from "react";
import "./NoMatchPage.css";

export default class NoMatchPage extends Component {
  render() {
    return (
      <div className="no-match-container">
        <h1 className="error-title">Error 404</h1>
        <p className="error-message">
          The page you are looking for does not exist.
        </p>
      </div>
    );
  }
}
