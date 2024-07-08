import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const PokeBag = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [pokemonName]);

  if (!pokemon) return null;

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        {pokemon.types.map((type, index) => (
          <Typography
            key={index}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {type.type.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default PokeBag;
