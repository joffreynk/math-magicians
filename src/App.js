import React, { useState } from 'react';
import Calculator from './components/Calculator';
import calculate from './components/logic/calculate';

const App = () => {
  const [data, setData] = useState({
    calcV: {},
    res: '0',
  });

  const handler = (e) => {
    const { calcV } = data;
    const calc = calculate(calcV, e.target.value);
    const { total, next } = calc;
    let res = '0';
    if (next) {
      res = next;
    } else if (total) {
      res = total;
    }

    setData({ calcV: calc, res });
  };
  const calculator = 'calculator';
  const { res } = data;
  return (
    <div className={calculator}>
      <Calculator handler={handler} total={res} />
      ;
    </div>
  );
};

export default App;
