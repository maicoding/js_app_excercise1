// IIFE
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Function to add pokemon
  function add(pokemon) {
    if (typeof(pokemon) === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('Error, could not locate Pokemon data.');
    }
  }

  //Function to return a list of pokemon names
  function getAll() {
    return pokemonList;
  }
  //Creating list and buttons of pokemon names
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemonList");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("poke-button");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }
  //Get list of pokemon from api
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  //get pokemon details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.spriteUrl = details.sprites.front_default;
      item.svgUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      item.types = details.types;
      //Function shows the types instead of "[object]" through forEach loop that goes through each pokemon
      let types = [];
      details.types.forEach((pokemon) => types.push(pokemon.type.name));
      item.types = types;

    }).catch(function(e) {
      console.error(e);
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector('#simpleModal');
    modalContainer.classList.remove('is-visible');
  }

  //Shows the name of the clicked pokemon in modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }
  // Show and hide modal functions
  function showModal(pokemon) {
    let modalContainer = document.querySelector('.modal');
    modalContainer.classList.add('is-visible');
    let modalTitle = document.querySelector('.modal-title');
    let pokeModalBody = document.querySelector('.modal-body');
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    // Listen for close Click
    let closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', function() {
      document.querySelector('.modal').classList.remove('is-visible');
    });
    // Listen for ESC close
    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#simpleModal');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
    // Click outside of window to close
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
    //Modal content
    modalTitle.innerText = pokemon.name;
    pokeModalBody.innerText = '';
    let pokeImg = document.createElement('img');
    pokeImg.classList.add("modal-img");
    pokeImg.src = pokemon.svgUrl;
    let heightDetail = document.createElement('p');
    heightDetail.innerText = `height: ${pokemon.height}`;
    let typesDetail = document.createElement('p');
    typesDetail.innerText = `type: ${pokemon.types.join(', ')}`;
    pokeModalBody.appendChild(heightDetail);
    pokeModalBody.appendChild(pokeImg);
    pokeModalBody.appendChild(typesDetail);

  }
  //Return functions
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
  };
})();

//Function loads the data from the api, forEach loop retrieves pokemon list one by one
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});