import React, {Component} from "react";
import {Redirect} from "react-router";
import {Card} from "../pages/Card";

export class CardItem extends Component {

    constructor(props) {
        super(props);

        this.onClickHandle = this.onClickHandle.bind(this);

        this.state = {
            redirect: false,
            cardId: null
        };
    }

    onClickHandle(e) {
        e.preventDefault();
        e.persist();
        this.setState({
            redirect: true,
            cardId: 'peter'
        });
    }

    render() {

        const ItemsTypes = [...this.props.itemsTypes].map((number, index) =>
            <div
                className="card d-sm-inline-flex m-1 border-primary p-1"
                key={number.id}
                onClick={this.onClickHandle}
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
                onClick={this.onClickHandle}
            >
                <img className="card-img-top" src={number.imageUrl} alt="img" />
                <div className="card-body">
                    <h4 className="card-title">{number.name}</h4>
                    <p className="card-text">{number.artist}</p>
                </div>
            </div>
        )


        return(


            <div className="list-group-item text-center">

                {ItemsTypes}
                {ItemsSubtype}

                <Card cardId={this.state.cardId} />
                {console.log(this.state)}
                {/*const {redirect} = this.state
                if (redirect) {
                return <Redirect to={`/card`}/>
            }*/}

            </div>

        )

    }
}