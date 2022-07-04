import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
    const { data } = this.state;
    return data.map((value, i) => <div className={`item${i}`} key={`item${i + 1}`}>{value}</div>);
  }
}

export default Calculator;
