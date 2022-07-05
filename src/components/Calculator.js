import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        '0.00',
        'AC',
        '+/-',
        '%',
        '÷',
        7,
        8,
        9,
        'x',
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
    return data.map((value, i) => {
      if(i === 0){
        return <input type='button' readOnly className={`item${i}`} key={`item${i + 1}`} value={this.props.total} />
      }

      return <input type='button' onClick={this.props.handler} className={`item${i}`} key={`item${i + 1}`} value={value} />
    });
  }
}

export default Calculator;
