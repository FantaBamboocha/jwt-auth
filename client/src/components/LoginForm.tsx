import { useState, FC, useEffect } from "react";

import { RootState, useAppDispatch } from "@store/store";
import login from "@store/thunk/login";
import registration from "@store/thunk/registration";
import logout from "@store/thunk/logout";
import { useSelector } from "react-redux";
import checkAuth from "@store/thunk/checkAuth";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuth());
  }, []);

  const handleLogin = async () => {
    dispatch(login({ email, password }));
  };

  const handleRegister = () => {
    dispatch(registration({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {isAuth && (
        <>
          <h2>{user.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      {!isAuth && (
        <div>
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
        </div>
      )}
    </>
  );
};

export default LoginForm;
