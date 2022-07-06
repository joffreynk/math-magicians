import React, { Component } from 'react';
import Calculator from './components/Calculator';
import calculate from './components/logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handler = (e) => {
    const calc = calculate(this.state, e.target.value);
    this.setState(calc);
  }

  render() {
    const calculator = 'calculator';
    const { total, next } = this.state;
    const result = next ? next : total;
    const res = result ? result : '0';

    return (
      <div className={calculator}>
        <Calculator handler={this.handler} total={res} />
        ;
      </div>
    );
  }
}

export default App;
