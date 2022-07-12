import React, { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import calculate from './components/logic/calculate';
import Quotes from './components/Quotes';

const App = () => {
  const [data, setData] = useState({
    calcV: {},
    res: '0',
  });

  const handler = (e) => {
    const { calcV } = data;
    const calc = calculate(calcV, e.target.value);
    const { total, next, operation } = calc;
    let res = '';

    if (total) {
      res += total;
    }

    if (operation) {
      res += operation;
    }

    if (next) {
      res += next;
    }

    if (res.length === 0) res = '0';

    setData({ calcV: calc, res });
  };

  const { res } = data;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calcuator" element={<Calculator handler={handler} total={res} />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
};

export default App;
