import React, {Component} from 'react';

export class Card extends Component {

    render() {

        console.log(this.props.cardId)
        return <h2>New {this.props.cardId}</h2>;

    }

}