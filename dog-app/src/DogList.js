import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1 text-center mt-4 mb-5"> Dog List! </h1>
                <div className="row">
                    {this.props.dogs.map(d => (
                        <div className='Dog col-md-6 col-lg-4 text-center' key={d.name}>
                            <img src={d.src} alt={d.name} />
                            <Link className="underline" to={`/dogs/${d.name}`} >
                                <h3 className="mt-3"> {d.name} </h3>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}

export default DogList;