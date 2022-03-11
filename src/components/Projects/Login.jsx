import React, { useState } from "react";
import "./../../styles/auth.css";
import { useNavigate } from "react-router-dom";
import postCredentials from "../../services/postCredentials";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    await postCredentials("http://localhost:5000/api/auth/login", {
      email: email,
      password: password,
    }).then((data) => {
      localStorage.setItem("token", data["token"]);
      navigate("/projects");
    });
  };

  return (
    <div className="login">
      <h1>Login page</h1>
      <form className="login-form">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={login}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
