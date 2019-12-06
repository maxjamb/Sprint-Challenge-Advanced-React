import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";

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
        {this.state.users
          ? this.state.users.map(user => {
              return <Card users={user} />;
            })
          : null}
      </div>
    );
  }
}
export default App;
