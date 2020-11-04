import React, {Component} from "react";

export class CardItem extends Component {

    render() {

        const ItemsTypes = [...this.props.itemsTypes].map((number, index) =>
            <div className="card d-sm-inline-flex m-1 border-primary p-1" key={index}>
                <img className="card-img-top" src={number.imageUrl} alt="img" />
                <div className="card-body">
                    <h4 className="card-title">{number.name}</h4>
                    <p className="card-text">{number.artist}</p>
                    <a href="url" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )

            const ItemsSubtype = [...this.props.itemsSubtype].map((number, index) =>
                <div className="card d-sm-inline-flex m-1 border-primary p-1" key={index}>
                    <img className="card-img-top" src={number.imageUrl} alt="img" />
                    <div className="card-body">
                        <h4 className="card-title">{number.name}</h4>
                        <p className="card-text">{number.artist}</p>
                        <a href="url" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )

        return(

            <div className="list-group-item text-center">

                <h2>Pokemon information</h2>

                {ItemsTypes}
                {ItemsSubtype}

            </div>
        )
    }
}