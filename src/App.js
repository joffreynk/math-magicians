import React, { Component } from 'react';
import Calculator from './components/Calculator';
import calculate from './components/logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcV: {},
      res: '0',
    };
  }

  handler = (e) => {
    const { calcV } = this.state;
    const calc = calculate(calcV, e.target.value);
    const { total, next } = calc;
    let res = '0';
    if (next) {
      res = next;
    } else if (total) {
      res = total;
    }

    this.setState({ calcV: calc, res });
  }

  render() {
    const calculator = 'calculator';
    const { res } = this.state;

    return (
      <div className={calculator}>
        <Calculator handler={this.handler} total={res} />
        ;
      </div>
    );
  }
}

export default App;
