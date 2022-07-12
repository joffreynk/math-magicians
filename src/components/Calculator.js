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
  const calculator = 'calculator';
  return (
    <div className="main-cal">
      <h2>Let&apos;s do some maths</h2>
      <div className={calculator}>
        {
        data.map((value, i) => {
          if (i === 0) {
            return <input type={mytype} readOnly className={`item${i}`} key={`item${i + 1}`} value={total} />;
          }
          return <input type={mytype} onClick={handler} className={`item item${i}`} key={`item${i + 1}`} value={value} />;
        })
      }
      </div>
    </div>
  );
};

Calculator.propTypes = {
  total: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
};

export default Calculator;
