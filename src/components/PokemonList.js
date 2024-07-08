import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../actions/pokemonActions";
import { CircularProgress, Grid, Typography } from "@mui/material";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  if (pokemon.loading) {
    return <CircularProgress />;
  }

  if (pokemon.error) {
    return <p>{pokemon.error}</p>;
  }

  return (
    <div>
      <Typography variant="h4">Pokemon List</Typography>
      <Grid container spacing={2}>
        {pokemon.pokemonList.map((pokemon, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PokemonList;
