import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY_MOVIE } from "../../config";

const Admin = () => {
  const [movie, setMovie] = useState();

  const PUBLIC_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get(API_KEY_MOVIE + PUBLIC_KEY).then((res) => {
      setMovie(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Les tendances</h1>
      {movie &&
        movie.map((mo, index) => (
          <ul>
            <li>
              <img src={mo.poster_path} alt="" />
              <p>{mo.name ? mo.name : mo.original_title}</p>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Admin;
