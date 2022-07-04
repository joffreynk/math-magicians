import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='calculator'>
        <Calculator />
      </div>
    );
  }
}

export default App;
