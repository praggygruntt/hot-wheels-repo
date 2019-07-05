import React, {Component} from 'react';
import './CarList.css';

export default class CarList extends Component {
    render() {
        return(
            <div className="CarList">
                 <h1 className="display-1 text-center">Car List!</h1>
                 <div className="container">
                     <div className="row">
                        {this.props.cars.map( car => (
                            <div className="Car col-12 col-sm-6 col-md-4 text-center" key={car.name}>
                                <img src={car.src} alt={car.name}/>
                                <h3>{car.name}</h3>
                            </div>
                        ))}
                     </div>
                 </div>
            </div>
        )
    }
}