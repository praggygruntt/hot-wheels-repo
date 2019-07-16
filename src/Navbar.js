import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import cars from './cars';

export default class Navbar extends Component {
    render() {
        const carLinks = cars.map( (car, index) => (
            <li className="nav-item" key={index}>
            <NavLink exact to={`/cars/${car.urlName}`} className="nav-link" key={car.name}>{car.name}</NavLink></li>
        ))
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Hot Wheels Repo</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/cars" className="nav-link">The Lot</NavLink>
                        </li>
                        {carLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}