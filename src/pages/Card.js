import React, {Fragment, Component} from 'react';

export class Card extends Component {

    render() {

        return (
            <Fragment>
                <h1>Card page</h1>
                <div>
                    <p>Props: {this.props.cardId}</p>
                </div>
            </Fragment>
        )
    }

}