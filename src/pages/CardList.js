import React, {Component, Fragment} from 'react';
import {pokemon} from "../components/pocemon/pocemon";
import {dataType} from "../components/pocemon/type";

pokemon.card.find('base1-4')
    .then(result => {
        console.log(result.card.name) // "Charizard"
    })

export class CardList extends Component {
    render() {
        return (
            <Fragment>
                <div className="container d-flex justify-content-between">
                    <h1>Card list page</h1>
                    <button
                        type="submit"
                        className="btn btn-primary justify-content-end"
                    >
                        Logout
                    </button>
                </div>
                <div className="container">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item w-100">

                            <div className="dropdown m-4">
                                <button
                                    className="btn btn-secondary dropdown-toggle w-25"
                                    type="button"
                                    id="dropdownMenu1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Type
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li className="dropdown-item">{JSON.stringify(dataType, function replacer(key, value) {
                                        return (`${key} : ${value}`)
                                    })}</li>
                                </ul>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    {for(let value of dataType) {console.log(value)}}
                                </ul>
                            </div>

                            <div className="dropdown m-4">
                                <button className="btn btn-secondary dropdown-toggle w-25"
                                        type="button" id="dropdownMenu2" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    Subtype
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <a className="dropdown-item" href="url">Action</a>
                                    <a className="dropdown-item" href="url">Another action</a>
                                </div>
                            </div>

                        </li>
                        <li className="list-group-item w-100">
                            <div className="card">
                                <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card title
                                            and make up the bulk of the card's content.
                                        </p>
                                        <a href="url" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}
