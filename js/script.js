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

//Loop for displaying pokemons
for (let i = 0; i < pokemonList.length; i++) {
	document.write(pokemonList[i].name + ' ' + 'height is ' + pokemonList[i].height + ' m!');

	//statement about height
	if (pokemonList[i].height >= 1.5) {
		document.write('     - I\'m size L. Wow, that\'s big!' + '<br>');
	} else if (pokemonList[i].height >= 0.5 && pokemonList[i].height <= 1.4) {
		document.write('     - I\'m size M. ' + '<br>');
	} else {
		document.write('     - I\'m size S. That\'s rather small! But do not underestimate me!' + '<br>');
	}
}
