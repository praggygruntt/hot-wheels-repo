import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import './CarList.css';

export default class CarList extends Component {
    render() {
        return(
            <div>
            <Navbar cars={this.props.cars}/>
            <div className="CarList">
                 <h1 className="display-1 text-center my-5">The Lot</h1>

                     <div className="row w-100 m-0">
                        {this.props.cars.map( car => (
                            <div className="Car col-12 col-sm-6 col-md-4 text-center p-0 " key={car.name}>
                                <Link to={`/cars/${car.urlName}`}><img src={car.src} alt={car.name}/></Link>
                                <h3 className="my-5">{car.name}</h3>
                            </div>
                        ))}
                     </div>
                 </div>
                 </div>                    
        )
    }
}