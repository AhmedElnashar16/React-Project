import React, { useEffect, useState } from "react";
import CardMovie from "../../Component/Card";
import "./style.css";
import axios from "axios";

export default function Home() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=86732c233a31801db781c730661e6253"
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  }, []);
  return (
    <div className="container">
      <div className="movies">
        {movies.map((m) => (
          <CardMovie key={m.id} movies={movies} movie={m} />
        ))}
      </div>
    </div>
  );
}
