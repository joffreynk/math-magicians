import React, { Component } from 'react';
import propTypes from 'prop-types';

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
    const { total, handler } = this.props;
    const mytype = 'button';
    return data.map((value, i) => {
      if (i === 0) {
        return <input type={mytype} readOnly className={`item${i}`} key={`item${i + 1}`} value={total} />;
      }

      return <input type={mytype} onClick={handler} className={`item${i}`} key={`item${i + 1}`} value={value} />;
    });
  }
}

Calculator.defaultProps = {
  total: 0,
}

Calculator.propTypes = {
  total: propTypes.number,
  handler: propTypes.func.isRequired,
};

export default Calculator;
