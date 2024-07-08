const initialState = {
  pokemonList: [],
  capturedPokemon: [],
  loading: false,
  error: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKEMON_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        pokemonList: action.payload,
      };
    case "FETCH_POKEMON_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CAPTURE_POKEMON":
      return {
        ...state,
        capturedPokemon: [...state.capturedPokemon, action.payload],
      };
    default:
      return state;
  }
};

export default pokemonReducer;
