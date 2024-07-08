import React from "react";
import { Grid, Typography } from "@mui/material";
import CapturedPokemonCard from "./CapturedPokemonCard";

const CapturedPokemonList = ({ capturedPokemons }) => {
  if (!capturedPokemons || capturedPokemons.length === 0) {
    return (
      <Typography variant="h6" gutterBottom>
        No captured Pokémon found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {capturedPokemons.map((pokemonName) => (
        <Grid item key={pokemonName} xs={12} sm={6} md={4} lg={3}>
          <CapturedPokemonCard pokemonName={pokemonName} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CapturedPokemonList;
