import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ShoppingCart from "./components/ShoppingCart";
import Login from "./components/Login";
import CustomersList from "./components/CustomersList";
import NoMatchPage from "./components/NoMatchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/customers" element={<CustomersList />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </Router>
      </>
    );
  }
}
