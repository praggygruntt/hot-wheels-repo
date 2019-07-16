import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CarDetails from './CarDetails';
import CarList from './CarList';
import HomePage from './HomePage';

export default class Routes extends Component {
    render() {
        const getCar = routeProps => {  
            let urlName = routeProps.match.params.urlName;
            let currentCar = this.props.cars.find(
              car => car.urlName === urlName
            );
            return <CarDetails {...routeProps} car={currentCar} />
          }
        return(
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/cars" render={() => <CarList cars={this.props.cars}/>} />
                <Route exact path="/cars/:urlName" render={getCar} />
                <Redirect exact to="/cars"/>
          </Switch>
        )
    }
}