import React, { Component } from "react";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
