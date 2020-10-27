import React, {Component, Fragment} from 'react';
//import {pokemon} from "../components/pocemon/pocemon";
//import {dataType} from "../components/pocemon/type";

const requestURL = 'https://api.pokemontcg.io/v1/cards';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
    let superHeroesText = request.response;
    let superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateAnotherHeaders(superHeroes);
    //showHeroes(superHeroes);
    console.log(`а где вы герои? - ${superHeroes}`);
}

function populateHeader(jsonObj) {
    let a = document.querySelector('.typesList');
    let  ListWithDifferentElems = []
    jsonObj.cards.forEach(function (elem) {
        if (elem['types']) {
            elem['types'].forEach(function (e) {
                ListWithDifferentElems.push(e)
            })

        }
    })
    let set = new Set(ListWithDifferentElems);
    set.forEach(function (elem) {
        let myLi = document.createElement('Li');
        myLi.textContent = elem;
        a.appendChild(myLi);
    })
}

function populateAnotherHeaders(jsonObj) {
    let b = document.querySelector('.subtypesList');
    let  ListWithDifferentAnotherElems = []
    jsonObj.cards.forEach(function (elem) {
        if (elem['subtypes']) {
            elem['subtypes'].forEach(function (e) {
                ListWithDifferentAnotherElems.push(e)
            })

        }
    })
    let set = new Set(ListWithDifferentAnotherElems);
    set.forEach(function (elem) {
        let myLi = document.createElement('Li');
        myLi.textContent = elem;
        b.appendChild(myLi);
    })
}

export class CardSomeList extends Component {
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
                    <div className="list-group list-group-horizontal">
                        <div className="list-group-item w-100">

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

                                <ul className="dropdown-menu typesList"  aria-labelledby="dropdownMenu1">

                                </ul>


                            </div>

                            <div className="dropdown m-4">
                                <button className="btn btn-secondary dropdown-toggle w-25"
                                        type="button" id="dropdownMenu2" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    Subtype
                                </button>
                                <ul className="dropdown-menu subtypesList" aria-labelledby="dropdownMenu2"></ul>
                            </div>

                        </div>
                        <div className="list-group-item w-100">
                            <div className="card">
                                <img className="card-img-top" src="/images/pathToYourImage.png" alt="img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">
                                            Some quick example text to build on the card title
                                            and make up the bulk of the card's content.
                                        </p>
                                        <a href="url" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
