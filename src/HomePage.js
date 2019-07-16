import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return(
            <div className="HomePage d-flex justify-content-center align-items-center flex-column">
                <h1 className="display-1 text-center">The Hot Wheels Repo</h1>
                <Link to="/cars" className="btn btn-success mt-5 Link">Enter</Link>
            </div>
        )
    }
}