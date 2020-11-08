import React, {Component} from 'react';

export class Card extends Component {

    requestURLCard = 'https://api.pokemontcg.io/v1/cards?id=' + this.props.cardId;

    constructor(props) {
        super(props);
        this.populateItemsCard = this.populateItemsCard.bind(this);
        this.handleLoadingItemsCard = this.handleLoadingItemsCard.bind(this);
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

            <div className="card border-primary p-1">
                <img
                    className="card-img-top"
                    src={this.state.imageUrlHiRes}
                    alt="Card image cap"
                />
            </div>

        )
    }
}


