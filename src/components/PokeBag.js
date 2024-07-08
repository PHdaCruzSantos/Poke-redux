import React from "react";
import { useSelector } from "react-redux";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";

const PokemonBag = () => {
  const capturedPokemon = useSelector((state) => state.pokemon.capturedPokemon);

  return (
    <Box>
      <Typography variant="h4">Captured Pokemon</Typography>
      <Grid container spacing={2}>
        {capturedPokemon.map((pokemon, index) => (
          <Grid item xs={4} sm={3} md={2} key={index}>
            <Card>
              <CardMedia
                component="img"
                image={pokemon.image}
                alt={pokemon.name}
                sx={{ width: "100%", height: "auto" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PokemonBag;
