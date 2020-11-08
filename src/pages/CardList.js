import React, {Component, Fragment} from 'react';
import {CardItem} from "../components/CardItem";

export class CardList extends Component {
    requestURL = 'https://api.pokemontcg.io/v1/cards';
    requestURLTypes = 'https://api.pokemontcg.io/v1/types';
    requestURLSubtype = 'https://api.pokemontcg.io/v1/subtypes';

    constructor(props) {
        super(props);

        this.state = {
            setTypes: new Set(),
            setSubtype: new Set(),

            clickedTypes: null,
            clickedSubtype: null,

            setFindTypes: new Set(),
            setFindSubtype: new Set()
        }

    }

    componentWillMount(){
        fetch(this.requestURL)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    this.populateFindTypes(result); // показать сразу в правой части карточки
                    //this.populateTypes(result);
                    //this.populateSubtype(result);
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
        fetch(this.requestURLTypes)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    this.populateTypes(result);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        fetch(this.requestURLSubtype)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    this.populateSubtype(result);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    populateTypes = (jsonObj) => {
        const  ListWithDifferentTypes = []
        jsonObj.types.forEach(function (elem) {
            Object.values(jsonObj.types).forEach(function (e) {
                ListWithDifferentTypes.push(e)
            })
        })
        const setTypes = new Set(ListWithDifferentTypes);
        this.handleLoadingTypes(setTypes)
    }

    handleLoadingTypes = (setTypes) => {
        this.setState({setTypes: setTypes});
        //console.log(this.state.setTypes)
    }


    populateSubtype = (jsonObj) => {
        const  ListWithDifferentSubtype = []
        jsonObj.subtypes.forEach(function (elem) {
            Object.values(jsonObj.subtypes).forEach(function (e) {
                ListWithDifferentSubtype.push(e)
            })
        })
        const setSubtype = new Set(ListWithDifferentSubtype);
        this.handleLoadingSubtype(setSubtype)
    }
    handleLoadingSubtype = (setSubtype) => {
        this.setState({setSubtype: setSubtype});
        //console.log(this.state.setSubtype)
    }

    handleClickTypes = (e) => {
        e.preventDefault();
        e.persist();
        const textTypes = e.target.textContent;
        this.setState({clickedTypes: textTypes});
        //this.state.clickedTypes = e.target.textContent;
        //console.log(this.state.clickedTypes);
        this.handleFindTypes(textTypes)
    }

    handleFindTypes = (textTypes) => {
        this.requestTypURL = this.requestURL + '?types=' + textTypes;
        //console.log(this.requestTypURL);
        fetch(this.requestTypURL)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    this.populateFindTypes(result)
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

    populateFindTypes = (jsonObj) => {
        const  ListWithDifferentFindTypes = []
        jsonObj.cards.forEach(function (e) {
            ListWithDifferentFindTypes.push(e)
        })
        const setFindTypes = new Set(ListWithDifferentFindTypes);
        this.handleLoadingFindTypes(setFindTypes)
        //console.log(setFindTypes)
    }

    handleLoadingFindTypes = (setFindTypes) => {
        this.setState({
            setFindTypes: setFindTypes,
            setFindSubtype: ''
        });
        //console.log(this.state.setTypes)
    }

    handleClickSubtype = (e) => {
        e.preventDefault();
        e.persist();
        const textSubtype = e.target.textContent;
        this.setState({clickedSubtype: textSubtype});
        //console.log(this.state.clickedSubtype);
        this.handleFindSubtype(textSubtype)
    }

    handleFindSubtype = (textSubtype) => {
        this.requestSubURL = this.requestURL + '?type=' + this.state.clickedTypes + '&subtype=' + textSubtype;
        //console.log(this.requestSubURL)
        fetch(this.requestSubURL)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    this.populateFindSubtype(result)
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


    populateFindSubtype = (jsonObj) => {
        const  ListWithDifferentFindSubtype = []
        jsonObj.cards.forEach(function (e) {
            ListWithDifferentFindSubtype.push(e)
        })
        const setFindSubtype = new Set(ListWithDifferentFindSubtype);
        this.handleLoadingFindSubtype(setFindSubtype)
        //console.log(setFindSubtype)
    }

    handleLoadingFindSubtype = (setFindSubtype) => {
        this.setState({
            setFindSubtype: setFindSubtype,
            setFindTypes: ''
        });
        //console.log(this.state)
    }


    render() {

        const listTypes = [...this.state.setTypes].map((number) =>
            <li key={number.toString()}>
                <a
                    href='/cardItem'
                    onClick={this.handleClickTypes}
                >
                    {number}
                </a>
            </li>
        )

        const listSubtype = [...this.state.setSubtype].map((number) =>
            <li key={number.toString()}>
                <a
                    href='/cardItem'
                    onClick={this.handleClickSubtype}
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
                <div className="container border border-info mt-3">
                    <div className="list-group list-group-horizontal">
                        <div className="list-group-item w-auto">

                            <div className="dropdown m-4">
                                <button
                                    className="btn btn-secondary dropdown-toggle w-100"
                                    type="button"
                                    id="dropdownMenu1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Types
                                </button>

                                <ul className="dropdown-menu typesList"  aria-labelledby="dropdownMenu1">
                                    {listTypes}
                                </ul>


                            </div>

                            <div className="dropdown m-4">
                                <button className="btn btn-secondary dropdown-toggle"
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

                        <div className="card-group w-100 justify-content-center">

                            <CardItem itemsTypes={this.state.setFindTypes} itemsSubtype={this.state.setFindSubtype} />

                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}


