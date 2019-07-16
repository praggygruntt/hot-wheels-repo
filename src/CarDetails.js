import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CarDetails.css';
import Navbar from './Navbar';

export default class CarDetails extends Component {
    render() {
        let {car} = this.props;
        return(
            <div>
                <Navbar/>

            <div className="container">
                <div className="CarDetails row justify-content-center mt-5">.
                    <div className="col-11 col-lg-5">
                        <div className="CarDetails-card card">
                            <img className="card-img-top" src={car.src} alt={car.name} />
                            <div className="card-body">
                                <h2 className="card-title">{car.name}</h2>
                                <h4 className="card-subtitle" text-muted="true">{`$${car.price} USD`}</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                {car.facts.map((fact, index) => (
                                    <li className="list-group-item" key={index}>{fact}</li>
                                ))}
                            </ul>
                            <div className="card-body">
                                <Link to="/cars" className="btn btn-danger">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
};