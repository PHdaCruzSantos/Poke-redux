import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Container>
        <Box sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
