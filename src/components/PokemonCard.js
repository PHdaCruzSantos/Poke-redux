import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { capturePokemon } from "../actions/pokemonActions";

const typeColors = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  flying: "#A890F0",
};

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleCapture = () => {
    dispatch(capturePokemon(pokemon));
  };

  return (
    <Card>
      <CardMedia component="img" image={pokemon.image} alt={pokemon.name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          {pokemon.types.map((type, index) => (
            <Chip
              key={index}
              label={type}
              sx={{ backgroundColor: typeColors[type], color: "white" }}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCapture}
          sx={{ mt: 2 }}
        >
          Capture
        </Button>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
