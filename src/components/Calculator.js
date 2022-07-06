import React from 'react';
import propTypes from 'prop-types';

const Calculator = (props) => {
      const data = [
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
      ];

    const { total, handler } = props;
    const mytype = 'button';

    return data.map((value, i) => {
      if (i === 0) {
        return <input type={mytype} readOnly className={`item${i}`} key={`item${i + 1}`} value={total} />;
      }
      return <input type={mytype} onClick={handler} className={`item${i}`} key={`item${i + 1}`} value={value} />;
    });
}

Calculator.propTypes = {
  total: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
};

export default Calculator;
