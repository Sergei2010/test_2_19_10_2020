import React, {Component, Fragment} from 'react';

export class CardList extends Component {
    requestURL = 'https://api.pokemontcg.io/v1/cards';

    constructor(props) {
        super(props);
        this.handleLoadingCards= this.handleLoadingCards.bind(this);
        this.state = {set: new Set()};
    }
    componentWillMount(){
        fetch(this.requestURL)
            .then(res => res.json())
            .then(
                (result) => {
                    //let superHeroes = result;
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
        let  ListWithDifferentElems = []
        jsonObj.cards.forEach(function (elem) {
            if (elem['types']) {
                elem['types'].forEach(function (e) {
                    ListWithDifferentElems.push(e)
                })

            }
        })
        let set = new Set(ListWithDifferentElems);
        this.handleLoadingCards(set)
    }
    handleLoadingCards(set) {
        this.setState({set: set});
    }

    render() {
        const listItems = [...this.state.set].map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
        console.log(listItems)
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
                                    {listItems}
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
        );
    }
}


