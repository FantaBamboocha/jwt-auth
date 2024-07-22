import { Container } from "@mui/material";

import Router from "./routes/Router";
import Notification from "@components/Notification";

function App() {
  return (
    <Container>
      <Router />
      <Notification />
    </Container>
  );
}

export default App;
