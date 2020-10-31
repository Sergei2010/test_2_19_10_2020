import React, {Component, Fragment} from 'react';
import {CardItem} from "../components/CardItem";

export class CardList extends Component {
    requestURL = 'https://api.pokemontcg.io/v1/cards';

    constructor(props) {
        super(props);
        this.handleLoadingTypes = this.handleLoadingTypes.bind(this);
        this.handleLoadingSubtype = this.handleLoadingSubtype.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            setTypes: new Set(),
            setSubtype: new Set(),
            clicked: 'aaa'

        }
        //console.log(this.state);
    }
    componentWillMount(){
        fetch(this.requestURL)
            .then(res => res.json())
            .then(
                (result) => {
                    //let superHeroes = result;
                    //console.log(result)
                    this.populateTypes(result)
                    this.populateSubtype(result)
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
    populateTypes(jsonObj) {
        let  ListWithDifferentTypes = []
        jsonObj.cards.forEach(function (elem) {
            if (elem['types']) {
                elem['types'].forEach(function (e) {
                    ListWithDifferentTypes.push(e)
                })

            }
        })
        let setTypes = new Set(ListWithDifferentTypes);
        this.handleLoadingTypes(setTypes)
    }
    handleLoadingTypes(setTypes) {
        this.setState({setTypes: setTypes});
        //console.log(this.state)
    }

    populateSubtype(jsonObj) {
        let  ListWithDifferentSubtype = []
        jsonObj.cards.forEach(function (elem) {
            if (elem.subtype) {
                ListWithDifferentSubtype.push(elem.subtype)
            }
        })
        let setSubtype = new Set(ListWithDifferentSubtype);
        this.handleLoadingSubtype(setSubtype)
    }
    handleLoadingSubtype(setSubtype) {
        this.setState({setSubtype: setSubtype});
        //console.log(this.state)
    }

    handleClick(e) {
        e.preventDefault();
        e.persist();
        this.setState( {
            // Важно: используем `state` вместо `this.state` при обновлении.
            clicked: e.target.textContent
        })
        console.log(this.state);
    }


    render() {
        const clicked = this.state.clicked;
        const listTypes = [...this.state.setTypes].map((number) =>
            <li key={number.toString()}>
                <a
                    value={clicked}
                    href='/cardItem'
                    onClick={this.handleClick}
                >
                    {number}
                </a>
            </li>
        )


        const listSubtype = [...this.state.setSubtype].map((number) =>
            <li key={number.toString()}>
                <a
                    value={clicked}
                    href='/cardItem'
                    onClick={this.handleClick}
                >
                    {number}
                </a>
            </li>
        );

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
                                    {listTypes}
                                </ul>


                            </div>

                            <div className="dropdown m-4">
                                <button className="btn btn-secondary dropdown-toggle w-25"
                                        type="button" id="dropdownMenu2"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                >
                                    Subtype
                                </button>
                                <ul className="dropdown-menu subtype"  aria-labelledby="dropdownMenu2">
                                    {listSubtype}
                                </ul>
                            </div>

                        </div>

                        <CardItem />

                    </div>
                </div>
            </Fragment>
        );
    }
}


