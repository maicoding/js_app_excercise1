let pokemonList = [{
    name: 'Ivysaur',
    height: 1.0,
    types: ['Grass', 'Poison'],
    abilities: ['Overgrow']
}, {
    name: 'Charmander',
    height: 0.6,
    types: ['Fire'],
    abilities: ['Blaze']
}, {
    name: 'Arbok',
    height: 3.5,
    types: ['Poison'],
    abilities: ['Shed Skin', 'Intimidate']
}, {
    name: 'Paras',
    height: 0.3,
    types: ['Grass', 'Bug'],
    abilities: ['Effect Spore', 'Dry Skin']
}, {
    name: 'Abra',
    height: 0.9,
    types: ['Psychic'],
    abilities: ['Inner Focus', 'Synchronize']
}, {
    name: 'Wartortle',
    height: 3.03,
    types: ['Water'],
    abilities: ['Torrent']
}, ];

// Display the data on the page as an unordered list
document.write('<ul class="pokemon-list">');
// for loop
for (let i = 0; i < pokemonList.length; i++) {
    let currentPokemon = pokemonList[i];

    // opening list element tag
    document.write(`
    <li class="pokemon-list__item">
      ${currentPokemon.name} is <span>${currentPokemon.height}</span> m.
  `);
    if (currentPokemon.height > 1.4) {
        document.write(' - Wow, that\'s big!');
    }
    if (currentPokemon.height < 1.4) {
        document.write(' - That\'s quite small!');
    }
    // closing the list element tag
    document.write('</li>');
}
// closing the ul tag
document.write('</ul>');
