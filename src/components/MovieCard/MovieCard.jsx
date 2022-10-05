import "./movieCard.css";
import * as actions from "./../../redux/actions/index"
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = (props) => {

  let dispatch = useDispatch();
  

  const handleButton = () => {
    dispatch(actions.deleteMovie(props.id))
  }

  return (
    <div className="card">
      <button onClick={handleButton} >x</button>
      <Link to={`/movie/${props.id}`} >
      <h3>{props.name}</h3>
      </Link>
      <img src={props.image} alt={props.name} />
      <p>ReleaseYear: {props.releaseYear}</p>
      <p>Director: {props.director}</p>

    </div>
  );
};

export default MovieCard;
