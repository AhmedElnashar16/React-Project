import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ReactComponent as SOLIDSTAR } from "../../assets/star-solid.svg";
import { ReactComponent as OUTLINESTAR } from "../../assets/star-outline.svg";
import { Link } from "react-router-dom";
import "./style.css";
import FavoriteList from "../../Pages/FavoriteList";
import { favList } from "../../App";
import { decreaseMovie, increaseMovie } from "../../Redux/Actions/countAction";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { countAction } from "../../Redux/Actions";
export default function CardMovie({ movies, movie }) {
  const dispatch = useDispatch();
  const { increaseMovie, decreaseMovie } = bindActionCreators(
    countAction,
    dispatch
  );
  const [on, setOn] = useState(false);
  function like(id) {
    const find = movies.find((m) => m.id === id);

    favList.push(find);
    setOn(!on);
    increaseMovie(1);
  }
  function unlike(id) {
    const find = movies.find((m) => m.id === id);
    favList.pop(find);
    setOn(!on);
    decreaseMovie(1);
  }
  return (
    <Card style={{ width: "100%", position: "relative" }}>
      <Link to={`/movie/details/${movie.id}`}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.release_date}</Card.Text>
        </Card.Body>
      </Link>
      {!on ? (
        <OUTLINESTAR className="starIcon" onClick={() => like(movie.id)} />
      ) : (
        <SOLIDSTAR className="starIcon" onClick={() => unlike(movie.id)} />
      )}
    </Card>
  );
}
