import React from "react";
import { Container, Box } from "@mui/material";
import PokemonList from "../components/PokemonList";
import PokeBag from "../components/PokeBag";

const HomePage = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ flex: 3 }}>
          <PokemonList />
        </Box>
        <Box sx={{ flex: 1 }}>
          <PokeBag />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
