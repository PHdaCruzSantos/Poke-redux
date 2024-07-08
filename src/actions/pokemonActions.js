import axios from "axios";

export const fetchPokemon = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_POKEMON_REQUEST" });
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const pokemonDetails = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonDetail = await axios.get(pokemon.url);
          return {
            name: pokemonDetail.data.name,
            image: pokemonDetail.data.sprites.front_default,
            types: pokemonDetail.data.types.map(
              (typeInfo) => typeInfo.type.name
            ),
          };
        })
      );
      dispatch({ type: "FETCH_POKEMON_SUCCESS", payload: pokemonDetails });
    } catch (error) {
      dispatch({ type: "FETCH_POKEMON_FAILURE", payload: error.message });
    }
  };
};

export const capturePokemon = (pokemon) => {
  return {
    type: "CAPTURE_POKEMON",
    payload: pokemon,
  };
};
