import React, {Component} from 'react';
import Routes from './Routes';
import './App.css';
import cars from './cars';

class App extends Component {
  static defaultProps = {
    cars: cars
  };
  render() {
    return (
      <div>
        <Routes cars={this.props.cars} />
      </div>    
    )
  }
}

export default App;
