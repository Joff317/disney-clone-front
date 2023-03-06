import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import disney from "../icons/disney";
import authAPI from "../services/authAPI";
import logo from "../assets/images/logo-disney.svg"
import "./Navbar.scss";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleDisconnect = () => {
    authAPI.logout();
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* <div className="left-nav-item"> */}
      <Link to="/" className="home" >
        <img src={logo} alt="" />
        {/* Home */}
      </Link>{" "}
      {/* </div> */}

      {isAuthenticated && <Link to="/admin">Admin</Link>}

      <div className="right-nav-item">
      {!isAuthenticated && (
        <Link to="/register" className="register item">
          S'inscrire
        </Link>
      )}
      {!isAuthenticated && <Link to="/login" className="login item">S'identifier</Link>}

      </div>
      {isAuthenticated && <li onClick={handleDisconnect}>Disconnect</li>}
    </div>
  );
};

export default Navbar;
