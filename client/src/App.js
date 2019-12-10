import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";

import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

import "../src/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.log("data not returned", error);
      });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {this.state.users
            ? this.state.users.map(user => {
                return <Card users={user} />;
              })
            : null}
        </div>
      </div>
    );
  }
}
export default App;
