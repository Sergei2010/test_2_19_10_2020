import React from "react";
import {render} from 'react-dom';

function ListItem(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <li>{props.value}</li>;
}
function NumberList(props) {
    numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Правильно! Ключ нужно определять внутри массива:
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
let numbers = [1, 2, 3, 4, 5];

render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
