import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-success text-white">
        <Link to="/dashboard" className="navbar-brand mb-0 h1 text-white">
          eCommerce
        </Link>

        <Link to="/customers" className="text-primary">
          Customers
        </Link>

        <Link to="/cart" className="text-primary">
          Items <span></span>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
