import { Box, Container } from "@mui/material";

import Router from "./routes/Router";
import Notification from "@components/Notification";

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
        <Notification />
      </Box>
    </Container>
  );
}

export default App;
