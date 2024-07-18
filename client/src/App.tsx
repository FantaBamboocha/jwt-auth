import { Box, Container } from "@mui/material";

import Router from "./routes/Router";

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Router />
      </Box>
    </Container>
  );
}

export default App;
