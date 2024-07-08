import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography, Alert } from "@mui/material";
import CapturedPokemonList from "../components/CapturedPokemonList";

const UserPage = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return (
      <Container>
        <Alert severity="warning">
          No user is logged in. Please log in to view captured Pokémon.
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {user.name}'s Captured Pokémon
      </Typography>
      <CapturedPokemonList capturedPokemons={user.capturedPokemon || []} />
    </Container>
  );
};

export default UserPage;
