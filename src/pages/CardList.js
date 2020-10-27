import React, {Component, Fragment} from 'react';
//import {pokemon} from "../components/pocemon/pocemon";
//import {dataType} from "../components/pocemon/type";



/*
function populateHeader(jsonObj) {
    let a = document.querySelector('.typesList')
    jsonObj.cards.forEach(function (elem) {
        let myLi = document.createElement('li');
        myLi.textContent = elem['types'];
        //let set = new Set(Object.entries(myLi.textContent))

        a.appendChild(myLi);
    })

}
*/





export class CardList extends Component {
    requestURL = 'https://api.pokemontcg.io/v1/cards';
    request = new XMLHttpRequest();

    componentWillMount(){
        fetch(this.requestURL)
            .then(res => res.json())
            .then(
                (result) => {
                    let superHeroes = result;
                    this.populateHeader(result)
                    console.log(result)
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }


     populateHeader(jsonObj) {
        let a = document.querySelector('.typesList');
        console.log(a);
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

                                <ul className="dropdown-menu typesList"  aria-labelledby="dropdownMenu1"></ul>


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
