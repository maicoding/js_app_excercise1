// IIFE
let pokemonRepository = (function() {
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
    }, ]

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemonList");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("poke-button")
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function() {
            showDetails(pokemon)
        });

    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }
    return {
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.add({
    name: 'Wartortle',
    'height': 3.03,
    types: ['Water'],
    abilities: ['Torrent']
});

// Display the data on the page as an unordered list
document.write('<ul class="pokemon-list">');
let pokemonList = pokemonRepository.getAll();
// for each
pokemonList.forEach(function(pokemon) {

    // opening list element tag
    document.write(`
    <li class="pokemon-list__item">
      ${pokemon.name} is <span>${pokemon.height}</span> m.
  `);
    if (pokemon.height > 1.9) {
        document.write(' - Wow, that\'s big!');
    }
    if (pokemon.height < 0.8) {
        document.write(' - That\'s quite small!');
    }
    // closing the list element tag
    document.write('</li>');
});
// closing the ul tag
document.write('</ul>');
