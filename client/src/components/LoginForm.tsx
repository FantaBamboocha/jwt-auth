import { useState, FC, useEffect } from "react";

import { RootState, useAppDispatch } from "@store/store";
import login from "@store/thunk/login";
import registration from "@store/thunk/registration";
import logout from "@store/thunk/logout";
import { useSelector } from "react-redux";
import checkAuth from "@store/thunk/checkAuth";
import axios from "axios";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const handleCheck = () => {
    dispatch(checkAuth());
  };

  const handleLogin = async () => {
    // const response = await axios.post(
    //   "http://localhost:5000/jwt-auth/login",
    //   {
    //     email,
    //     password,
    //   },
    //   {
    //     withCredentials: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   }
    // );
    // console.log(response.data);
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
          <button onClick={handleCheck}>Check</button>
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
