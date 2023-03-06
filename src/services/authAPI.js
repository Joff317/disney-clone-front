import { URL_LOGIN } from "../config";
import axios from "axios";
import jwtDecode from "jwt-decode";

function authenticate(credentials) {
  return axios
    .post(URL_LOGIN, credentials)
    .then((res) => res.data)
    .then((data) => {
      window.localStorage.setItem("authToken", data.jwt);
      window.localStorage.setItem("username", data.user.username);
      axios.defaults.headers["Authorization"] = "Bearer " + data.jwt;
      console.log(jwtDecode(data.jwt));
      console.log(isAuthenticated());
    });
}

function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");

  if (token) {
    const { exp } = jwtDecode(token);
    //la fonction renvoie la valeur du temps en miliseconde
    if (exp * 1000 > new Date().getTime()) {
      return true;
    }
  }
  return false;
}

function logout() {
  window.localStorage.removeItem("authToken");
  window.localStorage.removeItem("username");
  delete axios.defaults.headers["Authorization"];
}

function setup() {
  const token = window.localStorage.getItem("authToken");
  if (token) {
    const { exp } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      axios.defaults.headers["Authorization"] = "Bearer " + token;
    }
  }
}

export default {
  authenticate,
  isAuthenticated,
  logout,
  setup
};
