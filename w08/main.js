const pokemonNames = ["pikachu", "eevee", "charizard", "meowth", "dialga"]
let pokemonData = []


pokemonNames.forEach(pokemon => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(body =>  {
        console.log(body)

        const obj = {
            name: body.name,
            id: body.id,
            weight: body.weight,
            type: body.types[0].type.name
        }
        pokemonData.push(obj);
        console.log(obj)
        return obj
    })
    .then((obj) => {
        const pokemon = document.createElement('div');
        pokemon.classList.add("pokemon");
        pokemon.classList.add("box-3");
        pokemon.classList.add("box-i-4");
        pokemon.classList.add("box-m-6");
        pokemon.classList.add("box-p-10");

        const name = document.createElement("h3")
        name.textContent = obj.name;
        name.classList.add("pokemon-name")

        const id = document.createElement("p")
        id.classList.add("pokemon-id")
        id.textContent = "id: " + obj.id;

        const image = document.createElement("img")
        image.setAttribute("src", "https://ichef.bbci.co.uk/news/640/cpsprodpb/C120/production/_104304494_mediaitem104304493.jpg");

        const weight = document.createElement("p")
        weight.classList.add("pokemon-weight")
        weight.textContent = "weight: " + obj.weight;
        
        const type = document.createElement("p")
        type.classList.add("pokemon-type")
        type.textContent = "type: " + obj.type;

        pokemon.appendChild(name)
        pokemon.appendChild(image)
        pokemon.appendChild(id)
        pokemon.appendChild(weight)
        pokemon.appendChild(type)

        document.querySelector(".pokemans").appendChild(pokemon);
    })
    .catch(err => console.log(err))
}) 