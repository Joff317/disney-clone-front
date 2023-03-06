import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/login/LoginPage";
import Admin from "./pages/admin/Admin";
import AuthContext from "./context/authContext";
import { useEffect, useState } from "react";
import authAPI from "./services/authAPI";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated
  );

  useEffect(() => {
    authAPI.setup();
    authAPI.isAuthenticated();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
