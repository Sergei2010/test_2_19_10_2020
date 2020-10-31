import React, {Component} from "react";

export class CardItem extends Component {

    requestURL = 'https://api.pokemontcg.io/v1/cards';

    constructor(props) {
        super(props);
        this.handleLoadingCardItem = this.handleLoadingCardItem.bind(this);
        this.state = {
            setCardItem: new Set(),
        }
        //console.log(this.state);
    }

    componentWillMount(){
        fetch(this.requestURL)
            .then(res => res.json())
            .then(
                (result) => {
                    //let superHeroes = result;
                    this.populateCardItem(result)
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

    populateCardItem(jsonObj) {
        let  ListWithDifferentCardItem = []
        jsonObj.cards.forEach(function (elem) {
            if (elem['types']) {
                elem['types'].forEach(function (e) {
                    ListWithDifferentCardItem.push(e)
                })

            }
        })
        let setCardItem = new Set(ListWithDifferentCardItem);
        this.handleLoadingCardItem(setCardItem)
    }
    handleLoadingCardItem(setCardItem) {
        this.setState({setCardItem: setCardItem});
    }

    render() {

        /*const listTypes = [...this.state.setTypes].map((number) =>
            <li key={number.toString()}>
                <a href='url'>{number}</a>
            </li>
        )*/

        return(
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
        )
    }
}