import { useState, FC } from "react";

import { useAppDispatch } from "@store/store";
import login from "@store/thunk/login";
import registration from "@store/thunk/registration";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  const handleRegister = () => {
    dispatch(registration({ email, password }));
  };

  return (
    <>
      <h1>LoginForm</h1>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </>
  );
};

export default LoginForm;
