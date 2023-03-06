import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import AuthContext from "../../context/authContext";
import authAPI from "../../services/authAPI";
import "./login.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleChange = ({ currentTarget }) => {
    console.log(currentTarget);
    const { value, name } = currentTarget;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authAPI.authenticate(credentials);
      setIsAuthenticated(true);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-text">
          <h1>Identifiez-vous avec votre adresse e-mail et mot de passe</h1>
          <p>
            Cette adresse e-mail et ce mot de passe vous permettront de vous
            identifier sur votre compte Disney+ pour profiter de vos séries et
            films préférés.
          </p>
        </div>
        <div className="form-input">
          <input
            id="identifier"
            label="Username"
            type="text"
            name="identifier"
            placeholder="Adresse Email"
            onChange={handleChange}
          />
          <input
            id="password"
            label="password"
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChange}
          />
        </div>
        <div className="button">
          <button variant="contained" color="primary" type="submit">
            Se connecter
          </button>
        </div>
      </form>

      <Footer/>
    </div>
  );
};

export default LoginPage;
