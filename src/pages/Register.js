import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { URL_REGISTER } from "../config";
import AuthContext from "../context/authContext";

const Register = () => {

   const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });


  const { setIsAuthenticated } = useContext(AuthContext);

  const signUp = async (e) => {
   e.preventDefault();
    try {
      if (user.username && user.email && user.password) {
        const res = await axios.post(URL_REGISTER, user);
        setIsAuthenticated(true);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <div>
          <TextField
            id="username"
            label="Username"
            type="text"
            name="username"
            value={user.identifier}
            onChange={handleUserChange}
            // onChange={handleChange}
          />
          <TextField
            id="email"
            label="email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
            // onChange={handleChange}
          />
          <TextField
            id="password"
            label="password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={signUp}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
