import { Box, Container } from "@mui/material";

import Login from "@components/LoginForm";
import LoginForm from "@components/LoginForm/LoginForm";
import RegistrationForm from "@components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* <Login /> */}
        <LoginForm />
        <RegistrationForm />
      </Box>
    </Container>
  );
}

export default App;
