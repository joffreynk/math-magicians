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
    if (!this.state.total) {
      this.setState((prevState) => this.setState({...prevState, total : 0}))
    }
    const calculator = 'calculator';
    const { total } = this.state;
    return (
      <div className={calculator}>
        <Calculator
        handler={this.handler}
        total={total}
        />;
      </div>
    );
  }
}

export default App;
