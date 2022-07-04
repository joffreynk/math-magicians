import React, { Component } from "react";
import Calculator from "./components/Calculator.js";

class App extends Component {
  render() {
    return (
      <div className="calculator">
        <Calculator />
      </div>
    );
  }
}

export default App;
