import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
export default function MovieDetails(props) {
  const [Movie, setMovie] = useState([]);

  const movieId = props.match.params.id;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=86732c233a31801db781c730661e6253`
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
          alt=""
        />
        <h1>{Movie.original_title}</h1>
        <p>{Movie.overview}</p>
      </div>
    </div>
  );
}
