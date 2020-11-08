import React, {Component} from 'react';

export class Card extends Component {

    requestURLCard = 'https://api.pokemontcg.io/v1/cards?id=' + this.props.cardId;

    constructor(props) {
        super(props);
        this.state = {
            imageUrlHiRes: ''
        }
    }

    componentWillMount() {
        fetch(this.requestURLCard)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result);
                    this.populateItemsCard(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    populateItemsCard = (jsonObj) => {
        const setItemsCard = jsonObj['cards'][0];
        this.handleLoadingItemsCard(setItemsCard)
    }
    handleLoadingItemsCard = (setItemsCard) => {
        this.setState({
            imageUrlHiRes: setItemsCard.imageUrlHiRes
        });
    }

    render() {

        return(

            <div className="card d-flex justify-content-center">
                <img
                    className="card-img-top img-fluid"
                    src={this.state.imageUrlHiRes}
                    alt="Card cap"
                />
            </div>

        )
    }
}


