import React, {Component} from "react";
import {Card} from "../pages/Card";

export class CardItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            cardId: null
        };
    }

    onClickHandle = (id) => {
        this.setState({
            redirect: true,
            cardId: id
        })
    }

    render() {

        const ItemsTypes = [...this.props.itemsTypes].map((number, index) =>
            <div
                className="card d-sm-inline-flex m-1 border-primary p-1"
                key={index}
                id={number.id}
                onClick={(e) => this.onClickHandle(number.id, e)}
            >
                <img className="card-img-top" src={number.imageUrl} alt="img" />
                <div className="card-body">
                    <h4 className="card-title">{number.name}</h4>
                    <p className="card-text">{number.artist}</p>
                </div>
            </div>
        )

        const ItemsSubtype = [...this.props.itemsSubtype].map((number, index) =>
            <div
                className="card d-sm-inline-flex m-1 border-primary p-1"
                key={index}
                onClick={(e) => this.onClickHandle(number.id, e)}
            >
                <img className="card-img-top" src={number.imageUrl} alt="img" />
                <div className="card-body">
                    <h4 className="card-title">{number.name}</h4>
                    <p className="card-text">{number.artist}</p>
                </div>
            </div>

        )

        if (this.state.redirect === false)

            return(

                <div className="list-group-item text-center">

                    {ItemsTypes}
                    {ItemsSubtype}

                </div>

            )

        else return(

            <div className="list-group-item justify-content-center">

                    <Card cardId = {this.state.cardId} />

                    {console.log(this.state.cardId)}

            </div>

        )

    }
}