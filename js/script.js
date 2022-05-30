// IIFE
let pokemonRepository = (function () {
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
    },]

    //display pokemon
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
        button.addEventListener('click', function () {
            showDetails(pokemon)
        });

    }

    //show details of a pokemon
    function showDetails(pokemon) {
        console.log(pokemon);
    }
    return {
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
