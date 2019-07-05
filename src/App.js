import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import CarList from './CarList';
import CarDetails from './CarDetails';
import './App.css';

class App extends Component {
  static defaultProps = {
    cars: [
      {
        name: "Volkswagen T1 Drag Bus",
        urlName: "volkswagen_t1_drag_bus",
        price: 29.99,
        src: "https://images.mattel.com/scene7/Y0444_01?$oslarge$&template=HWCBackgroundTemplate",
        facts: [
          "Never been opened, original condition",
          "Incredible hand-painted detail",
          "Comes with complimentary burnt tire smell"
        ]
      },
      {
        name: "1980 Chevy El Camino",
        urlName: "1980_chevy_el_camino",
        price: 24.99,
        src: "https://images.mattel.com/scene7/P9098_01?$oslarge$&template=HWCBackgroundTemplate",
        facts: [
          "Certified with junk in the trunk",
          "Die-cast metals with pearlescent accents",
          "Note: Flames are cosmetic only, not real"
        ]
      },
      {
        name: "S'Cool Bus",
        urlName: "scool_bus",
        price: 19.99,
        src: "https://images.mattel.com/scene7/H9273_01?$oslarge$&template=HWCBackgroundTemplate",
        facts: [
          "Seats 20 small people",
          "Shocks are broken but swag is not",
          "Worth its weight in gold...paint"
        ]
      }
    ]
  };
  render() {
    const getCar = routeProps => {  
      let urlName = routeProps.match.params.urlName;
      let currentCar = this.props.cars.find(
        car => car.urlName === urlName
      );
      return <CarDetails {...routeProps} car={currentCar} />
    }
    return (
      <Switch>
        <Route exact path="/cars" render={() => <CarList cars={this.props.cars}/>} />
        <Route exact path="/cars/:urlName" render={getCar} />
      </Switch>
    )
  }
}

export default App;
