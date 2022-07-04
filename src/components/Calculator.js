import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interface: [
        0,
        'AC',
        '+/-',
        '%',
        '÷',
        7,
        8,
        9,
        '×',
        4,
        5,
        6,
        '-',
        1,
        2,
        3,
        '+',
        0,
        '.',
        '=',
      ],
    };
  }
  render() {
    return this.state.interface.map((value, i) => (
      <div className={`item${i}`}>{value}</div>
    ));
  }
}

export default Calculator;
