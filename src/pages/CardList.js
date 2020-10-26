import React, {Component, Fragment} from 'react';
// импортируем функцию для загрузки
import load from '../utils/load';

load('data.json')
    .then(data => {
        /* эта функция сработает для загруженных данных */
    });

export class CardList extends Component {
    render() {
        return (
            <Fragment>
                <h1>Card list page</h1>
            </Fragment>
        )
    }
}