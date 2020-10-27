export const pokemon = require('pokemontcgsdk');

pokemon.card.find('base1-4')
    .then(result => {
        console.log(result.card.name) // "Charizard"
    })